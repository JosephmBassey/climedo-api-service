import autoBind from 'auto-bind';
import BaseService from './BaseService';
import enums from '../config/enums';
import Tab from '../models/v1/Tabs';

class ApiService extends BaseService {

    constructor() {
        super();
        // autoBind(this);
    }

    createTabs(req) {
        return new Promise(async (resolve, reject) => {
            try {
                const { name, description, dataPoints } = req.body;
                const newTab = new Tab({
                    name,
                    description,
                    dataPoints
                })

                const data = await newTab.save();
                return resolve(data);

            } catch (err) {
                return reject(err);
            }
        });
    }

    getTabs(req) {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await Tab.find({});

                return resolve(data);

            } catch (err) {
                console.log(err);
                return reject(err);
            }
        });
    }

    updateTabs(req) {
        return new Promise(async (resolve, reject) => {
            try {
                const { body } = req;
                const { tabId } = req.params;

                const data = Tab.findOneAndUpdate({ _id: tabId }, body, { new: true })
                return resolve(data);

            } catch (err) {
                return reject(err);
            }
        });
    }

    deleteTabs(req) {
        return new Promise(async (resolve, reject) => {
            try {
                const { tabId } = req.params;

                const data = await Tab.findOneAndDelete({ _id: tabId });

                return resolve(data);

            } catch (err) {
                return reject(err);
            }
        });
    }

    getTabsStatistics(req) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await Tab.find({});

                const stats = data ? data.map(({ id, dataPoints }) => {
                    return {
                        _id: id,
                        datapointCount: dataPoints.length ? dataPoints.length : 0
                    }
                }) : [];

                return resolve(stats);

            } catch (err) {
                return reject(err);
            }
        });
    }


}

export default ApiService;