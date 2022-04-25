import Resource from 'App/Models/Resource';
import ResourceValidator from 'App/Validators/ResourceValidator';
import ResourceUpdateValidator from 'App/Validators/ResourceUpdateValidator';
import Env from '@ioc:Adonis/Core/Env';
import Drive from '@ioc:Adonis/Core/Drive';
import { ResourceToStore } from '../../../types/SharpObjects';

export default class ResourcesController {
  /**
   * It returns all the resources in the database
   * @param  - response - The response object
   * @returns The index method is returning all the resources.
   */
  public async index({ response }) {
    try {
      return await Resource.all();
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  /**
   * It returns the resource with the given id, or returns an error if the resource doesn't exist
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The resource with the id that was passed in the params.
   */
  public async show({ params, response }) {
    try {
      return await Resource.findOrFail(params.id);
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  // //not forget to comment
  public async store({ request, response }) {
    try {
      const data = await request.validate(ResourceValidator);
      const audio = request.file('audio', {
        extnames: ['mp3'],
      });
      if (!audio) {
        return response.badRequest({
          type: 'error',
          content: 'no audio with the key "audio" sent',
        });
      }
      if (!audio.isValid) {
        return response.badRequest({
          type: 'error',
          content: audio.errors,
        });
      }

      const today = Date.now();
      audio.clientName = `${today}_${audio.clientName}`;
      await audio.move(`${Env.get('URL_AUDIO')}`);
      const url = `${Env.get('BASE_URL')}audios/${audio.fileName}`;
      const AudioToStore: ResourceToStore = {
        url: url,
        name: audio.clientName,
        id_poi: data.id_poi,
        id_lang: data.id_lang,
      };
      const resource = await Resource.create(AudioToStore);
      return resource;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  /**
   * It updates a resource with the given id, using the data from the request body
   * @param  - params - The parameters of the request.
   * @returns The resource that was updated.
   */
  public async update({ params, request, response }) {
    const data = await request.validate(ResourceUpdateValidator);
    const audio = request.file('audio', {
      extnames: ['mp3'],
    });
    const id = params.id;
    let ObjectToStore: ResourceToStore = {};
    try {
      const resource = await Resource.findOrFail(id);
      if (audio) {
        await Drive.delete(`audios/${resource.name}`);
        const today = Date.now();
        audio.clientName = `${today}_${audio.clientName}`;
        await audio.move(`${Env.get('URL_AUDIO')}`);
        const url = `${Env.get('BASE_URL')}audios/${audio.fileName}`;
        ObjectToStore.url = url;
        ObjectToStore.name = audio.clientName;
      }
      ObjectToStore.id_poi = data.id_poi ?? resource.id_poi;
      ObjectToStore.id_lang = data.id_lang ?? resource.id_lang;
      resource.merge(ObjectToStore);
      await resource.save();
      return resource;
    } catch (error) {
      return response.internalServerError({
        type: 'error',
        content: error.message,
      });
    }
  }

  /**
   * It finds a resource by its id, and if it exists, it deletes it
   * @param  - params - This is the parameters that are passed in the URL.
   * @returns The response is being returned.
   */
  public async destroy({ params, response }) {
    try {
      const resource = await Resource.findOrFail(params.id);
      if (!(await Drive.exists(`audios/${resource.name}`))) {
        return response.badRequest({
          type: 'error',
          content: "Image doesn't exist",
        });
      }
      await Drive.delete(`audios/${resource.name}`);
      await resource.delete();
      return response.ok({
        type: 'sucess',
        content: 'resource deleted',
      });
    } catch (error) {
      return response.badRequest({
        type: 'error',
        content: error.message,
      });
    }
  }
}
