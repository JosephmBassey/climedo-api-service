import express from 'express';
import TabsController  from '../../controllers/v1/TabsController';
import TabsValidator from '../../validations/v1/TabsValidator';

const  routes = express.Router();
const {createTabs, getTabs, getTabsStatistics, updateTabs, deleteTabs} = new TabsController();
const {validatePayload, validateIdExist} = new TabsValidator();

routes.post('/tabs', validatePayload, createTabs);
routes.get('/tabs', getTabs);
routes.get('/tab-stats', getTabsStatistics);
routes.put('/tabs/:tabId', validateIdExist, updateTabs);
routes.delete('/tabs/:tabId', validateIdExist,  deleteTabs);


export default routes;
