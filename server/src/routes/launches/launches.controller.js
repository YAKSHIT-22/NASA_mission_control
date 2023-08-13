const { getAllLaunches, scheduleNewLaunch, abortLaunch, existsLaunchWithId } = require("../../models/launches.model");
const { getPagination } = require("../../services/query");

async function httpGetAllLaunches(req, res) {
  const { skip, limit } = getPagination(req.query);
  return res.status(200).json(await getAllLaunches(skip,limit));
}
async function httpAddNewLaunches(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }
  await scheduleNewLaunch(launch);
  return res.status(201).json(launch);
}

async function httpAbortLaunch(req,res){
    const launchId = Number(req.params.id);
    const aborted = await abortLaunch(launchId);
    const existsLaunch = await existsLaunchWithId(launchId);
    if(!existsLaunch){
        return res.status(400).json({
            error: 'Launch not found',
        })
    }
    if(!aborted){
        return res.status(400).json({
            error: 'Launch not aborted',
        })
    }
    return res.status(200).json({
        ok: true,
    });
}

module.exports = { httpGetAllLaunches, httpAddNewLaunches, httpAbortLaunch };
