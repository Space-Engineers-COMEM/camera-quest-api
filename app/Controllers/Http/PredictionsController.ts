import PoisController from './PoisController';
import Drive from '@ioc:Adonis/Core/Drive';
import Env from '@ioc:Adonis/Core/Env';
import fetch from 'cross-fetch';

const MIN_PROBABILITY = 0.75;

export default class PredictionsController {
  /**
   * Get the sent image from the server, get the prediction, and return the response
   * @param  - request: The request image.
   * @returns The prediction is being returned as a JSON object.
   */
  public async handlePrediction({ request, response }) {
    let image = request.file('image', {
      size: '4mb',
      extnames: ['jpg', 'png', 'gif', 'bmp', 'jpeg'],
    });

    // Check if the file is present
    if (!image) {
      return response.badRequest({ type: 'error', content: 'No image provided' });
    }

    // Check if the file is valid
    if (!image.isValid) {
      return response.badRequest({ type: 'error', content: image.errors[0].message });
    }

    // Get the file from the server
    const file = await Drive.get(image.tmpPath);

    // Get the prediction
    const predictionResponse = await this.getPrediction(file);

    // Check if the prediction was successful
    if (predictionResponse.predictions[0].probability > MIN_PROBABILITY) {
      // return response.ok({
      //   type: 'prediction',
      //   content: predictionResponse.predictions[0],
      // });
    } else {
      return response.ok({
        type: 'unpredictable',
        content: "Couldn't predict the image",
      });
    }
  }

  /**
   * Sends a file to the prediction API and returns the response.
   * @param {Buffer} file - The image file that needs to be classified.
   * @returns The prediction API returns a JSON object.
   */
  private async getPrediction(file: Buffer) {
    // Fetch data from prediction API
    const predictionRequest = await fetch(Env.get('PREDICTION_API_URL'), {
      method: 'post',
      body: file,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Prediction-Key': Env.get('PREDICTION_API_KEY'),
      },
    });

    const predictionResponse = await predictionRequest.json();
    return predictionResponse;
  }
}
