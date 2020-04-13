namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 e e e e 9 9 9 9 9 9 
9 9 9 9 9 e e e e e e 9 9 9 9 9 
9 9 9 9 e e e e e e e e 9 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
9 9 9 e 5 5 e e e e e e e 9 9 9 
9 9 9 e 5 5 e e e e e e e 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
9 9 9 e e e e e e e e e e 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f f f f f f f 9 9 9 9 9 
9 9 9 f 5 5 5 5 5 5 5 f 9 9 9 9 
9 9 f 5 5 5 5 f 5 5 5 5 f 9 9 9 
9 f 5 5 5 f f f f f 5 5 5 f 9 9 
9 f 5 5 5 f 5 f 5 5 5 5 5 f 9 9 
9 f 5 5 5 f 5 f 5 5 5 5 5 f 9 9 
9 f 5 5 5 f f f f f 5 5 5 f 9 9 
9 f 5 5 5 5 5 f 5 f 5 5 5 f 9 9 
9 f 5 5 5 5 5 f 5 f 5 5 5 f 9 9 
9 f 5 5 5 f f f f f 5 5 5 f 9 9 
9 9 f 5 5 5 5 f 5 5 5 5 f 9 9 9 
9 9 9 f 5 5 5 5 5 5 5 f 9 9 9 9 
9 9 9 9 f f f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
function game2 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020202020202020202020202020202020202020204040404040404020202020202020202010101010101010202020202020202010202020202020202020202020202040202020202020202020202020202020101020202020202020202020202020202020202020202020101010102020202020202010102040202020202020202020202040202020101020202020202020202020102020202020202020202020202020202020202020201010102020202020101020202020402020202020202020404020202020201010102020202020201010202010102020202020202020202020202020202020202020202020301010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 . 
. . . . . . 2 2 . . . . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 . . 
. . . 2 2 . . . . . . . . . . . 
. . . . . . . . . 2 2 2 . . . . 
. . 2 2 . . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile3,myTiles.tile4],
            TileScale.Sixteen
        ))
    duck = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
. b b b d 5 5 5 5 5 4 4 4 4 4 b 
b d d d b b d 5 5 4 4 4 4 4 b . 
b b d 5 5 5 b 5 5 5 5 5 5 b . . 
c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
c b d c d 5 5 b 5 5 5 5 5 5 b . 
. c d d c c b d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    duck.setPosition(10, 235)
    duck.ay = 350
    controller.moveSprite(duck, 100, 0)
    scene.cameraFollowSprite(duck)
    numJumps = 0
    info.startCountdown(30)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, myTiles.tile1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numJumps < 1) {
        duck.vy = -200
        numJumps += 1
    }
})
let numJumps = 0
let duck: Sprite = null
scene.setBackgroundColor(9)
game.showLongText("Collect all the coins in 30 seconds and reach the door to win the game ", DialogLayout.Bottom)
game2()
forever(function () {
    if (duck.isHittingTile(CollisionDirection.Bottom)) {
        numJumps = 0
    }
})
