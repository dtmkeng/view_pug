const router = require('express').Router()
// const Event = require('../models/event')

router.get('/',  (req, res) => {
    res.render('event/p1-scan_name')
})
router.get('/p1',  (req, res) => {
    res.render('event/p1-scan_name')
})
router.get('/p2',  (req, res) => {
    res.render('event/p2-part_name')
})
router.get('/p3',  (req, res) => {
    res.render('event/p3-tag_no')
})
router.get('/p4',  (req, res) => {
    res.render('event/p4-part_no')
})

module.exports = router