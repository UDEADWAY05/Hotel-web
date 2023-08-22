const express = require('express')
const router = express.Router({ mergeParams: true })
const fs = require('fs/promises')
const path = require('path')

router.get('/:id', async (req, res) => {
    try {
        const wayImg = path.join(__dirname, '..' ,'./static', `./room${req.params.id}.jpg`)
        res.setHeader("Content-Type", "image/jpeg");
        const img = await fs.readFile(wayImg)
        res.status(200).end(img);
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже'
        })
    }
})

module.exports = router