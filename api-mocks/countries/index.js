const router = require("express").Router()

router.get("/list", (req, res) => {
    const response = {"success": true,
    "data": [
        {
            "currency": null,
            "currency_symbol": null,
            "image_url": null,
            "tags": [],
            "is_deleted": false,
            "updated_at": null,
            "processing_time_in_days": 10,
            "_id": "6040811ac49b47472cbdaa24",
            "name": "India",
            "symbol": "IND",
            "created_at": "2021-03-04T06:41:30.726Z"
        }
    ]}
    res.send(response)
})

module.exports = router;