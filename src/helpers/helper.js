/* istanbul ignore file */
import constants from '../config/constants';

const {
    FAILED, SUCCESS, HTTP_UNPROCESSABLE_ENTITY, HTTP_CREATE_OK,
    HTTP_NOT_FOUND, HTTP_BAD_REQUEST, HTTP_CONFLICT,
    HTTP_FORBIDDEN, HTTP_OK, HTTP_UNAUTHORIZED, HTTP_INTERNAL_SERVER_ERROR
} = constants;

class Helpers {
    /**
   * 
   * @param {object} errors 
   * processes the errors returned by the validator and puts it in required format
   */
    extractErrors(errors) {
        return errors.map(error => error.msg);
    }


    /**
   * 
   * @param {object} res 
   * @param {object} errors 
   * formats response caused due to form validation
   */
    bodyValidationFailed(res, message = 'validation error') {
        let response = {
            status: 'error',
            status_code: HTTP_BAD_REQUEST,
            message,
            data: null
        };
        return res.status(HTTP_BAD_REQUEST).send(response);
    }

    /**
   * 
   * @param {object} res 
   * @param {object} errors 
   * formats response caused due to field validation
   */
    fieldValidationFailed(res, message) {
        let response = {
            message: message,
            status: 'error',
            status_code: HTTP_BAD_REQUEST,
            data: null
        };
        return res.status(HTTP_BAD_REQUEST).send(response);
    }

    /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for not found
   */
    notFound(res, message) {

        let response = {
            status: FAILED,
            status_code: HTTP_NOT_FOUND,
            message
        };
        return res.status(HTTP_NOT_FOUND).send(response);
    }

    /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for unauthorized requests
   */
    unauthorized(res, message) {
        let response = {
            status: FAILED,
            status_code: HTTP_UNAUTHORIZED,
            message

        };
        return res.status(HTTP_UNAUTHORIZED).send(response);
    }

    /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for bad requests
   */
    badRequest(res, message) {
        let response = {
            status: FAILED,
            status_code: HTTP_BAD_REQUEST,
            message

        };
        return res.status(HTTP_BAD_REQUEST).send(response);
    }

    /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for successful action that doesn't require data to be sent back
   */
    actionSuccess(res, message) {
        let response = {
            status: SUCCESS,
            status_code: HTTP_OK,
            message
        };
        return res.status(HTTP_OK).send(response);
    }

    /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for failed action that doesn't require data to be sent back
   */
    actionFailure(res, message) {
        let response = {
            status: FAILED,
            status_code: HTTP_INTERNAL_SERVER_ERROR,
            message

        };
        return res.status(HTTP_INTERNAL_SERVER_ERROR).send(response);
    }

    /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for forbidden action
   */
    forbidden(res, message) {
        let response = {
            status: FAILED,
            status_code: HTTP_FORBIDDEN,
            message

        };
        return res.status(HTTP_FORBIDDEN).send(response);
    }

    /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for successful action that requires data to be returned
   */
    success(res, data, message = 'successful') {
        let response = {
            status: SUCCESS,
            status_code: HTTP_OK,
            message,
            data,


        };
        return res.status(HTTP_OK).send(response);
    }

    /**
* 
* @param {object} res 
* @param {string} message 
* Formats response for successful action that requires data to be returned
*/
    successCreate(res, data, message = 'successful') {
        let response = {
            status: SUCCESS,
            status_code: HTTP_CREATE_OK,
            message,
            data

        };
        return res.status(HTTP_OK).send(response);
    }




}

export default Helpers;