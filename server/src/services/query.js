const DEFAULT_PAGE_NUMBER =1;
const DEFAULT_PAGE_LIMIT = 0;

function getPagination(req){
    const limit = Math.abs(req.limit) || DEFAULT_PAGE_LIMIT;
    const page = Math.abs(req.page) || DEFAULT_PAGE_NUMBER;
    const skip = (page - 1) * limit;
    return {limit, skip};
}

module.exports = {getPagination};