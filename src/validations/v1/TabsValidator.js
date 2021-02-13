import autoBind from 'auto-bind';
import Helpers from '../../helpers/helper';
import enums from '../../config/enums';
import Tab from '../../models/v1/Tabs';
/**
 * Defines methods for validating Tabs functions
 *
 * @class TabsValidator
 */
class TabsValidator extends Helpers {

    constructor() {
        super();
        autoBind(this);

    }
    /**
   * validates tabs req.body 
   * @param {object} req
   * @param {object} res
   * @param {callback} next
   */
    async validatePayload(req, res, next) {
        const { dataPoints } = req.body;

        req.checkBody('name', 'name field is required.').trim().escape().notEmpty();


        req.checkBody('description', 'description field is required.').trim().escape().notEmpty();

        req.checkBody('dataPoints', 'dataPoints field is required.').trim().escape().notEmpty();


        req.check("dataPoints.*.dataType", 'dataType field is required.').notEmpty()
       
        let errors = req.validationErrors();

        if (errors) {
            return super.bodyValidationFailed(res, super.extractErrors(errors)[0]);
        }

        return next();
    }


    /**
   * validates Id exist 
   * @param {object} req
   * @param {object} res
   * @param {callback} next
   */
    async validateIdExist(req, res, next) {
        const { tabId } = req.params;

        const tabIdExist = await Tab.findOne({ _id: tabId })

        req.check('tabId', 'Tab ID does not exists').custom(() => tabIdExist == null ? false : true);
        const errors = req.validationErrors();

        if (errors) {
            return super.notFound(res, super.extractErrors(errors)[0]);
        }
        return next();
    }

}
export default TabsValidator;
