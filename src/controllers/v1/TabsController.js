
import autoBind from 'auto-bind';
import BaseController from './BaseController';
import TabService from '../../services/TabService';

class TabsController extends BaseController {
    constructor() {
        super();
        autoBind(this);
        this.tabService = new TabService();
    }

    /**
    * @param {Object} req 
    * @param {Object} res 
    * @api {get} /tabs Fetch Tabs data
    * @apiName Fetch Tabs
    * @apiGroup Tabs
    * @apiSuccess (200) {Object} mixed `tabs` object
    */
    async getTabs(req, res) {
        try {
            const data = await this.tabService.getTabs(req);

            return super.success(res, data, 'Tabs successfully retrieved');

        } catch (error) {
            const message = error.message || 'Error occur while fetching Tabs.';
            return super.actionFailure(res, message);
        }
    }

    /**
    * @param {Object} req 
    * @param {Object} res 
    * @api {get} /tabs/{tabId} Delete Tabs
    * @apiName Delete Tabs
    * @apiGroup Tabs
    * @apiSuccess (200) {Object} tabs object
    */
    async deleteTabs(req, res) {
        try {
            const data = await this.tabService.deleteTabs(req);

            return super.success(res, data, 'Tabs deleted successfully');

        } catch (error) {
            const message = error.message || 'Error occur while deleting Tabs.';
            return super.actionFailure(res, message);
        }
    }

    /**
    * @param {Object} req 
    * @param {Object} res 
    * @api {get} /tabs/{tabId} Update Tabs
    * @apiName Update Tabs
    * @apiGroup Tabs
    * @apiSuccess (200) {Object} `tabs` object
    */
    async updateTabs(req, res) {
        try {
            const data = await this.tabService.updateTabs(req);

            return super.success(res, data, 'Tabs updated successfully');

        } catch (error) {
            const message = error.message || 'Error occur while updating Tabs.';
            return super.actionFailure(res, message);
        }
    }

    /**
    * @param {Object} req 
    * @param {Object} res 
    * @api {get} /tabs/{tabId} Update Tabs
    * @apiName Update Tabs
    * @apiGroup Tabs
    * @apiParam {name} name of tab
   * @apiParam {description} description description of tab
   * @apiParam {dataPoints} dataPoints dataPoints of tab
    * @apiSuccess (201) {Object} `tabs` object
    */
    async createTabs(req, res) {
        try {
            const data = await this.tabService.createTabs(req);

            return super.successCreate(res, data, 'Tabs created successfully');

        } catch (error) {
            const message = error.message || 'Error occur while creating Tabs.';
            return super.actionFailure(res, message);
        }
    }

    /**
    * @param {Object} req 
    * @param {Object} res 
    * @api {get} /tab-stats Fetch Tabs Stat
    * @apiName Fetch Tabs Statistics
    * @apiGroup Tabs
    * @apiSuccess (200) {Object} `tabs` object
    */
    async getTabsStatistics(req, res) {
        try {
            const data = await this.tabService.getTabsStatistics(req);

            return super.success(res, data, 'Tabs statistics successfully');

        } catch (error) {
            const message = error.message || 'Error occur while creating Tabs.';
            return super.actionFailure(res, message);
        }
    }
}

export default TabsController;
