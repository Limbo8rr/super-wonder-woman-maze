namespace SpriteKind {
    export const wondy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.wondy, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.wondy, assets.tile`chorona 0`, function (sprite, location) {
    info.changeScoreBy(-10)
    music.buzzer.play()
    tiles.setTileAt(location, assets.tile`myTile1`)
})
scene.onOverlapTile(SpriteKind.wondy, assets.tile`myTile2`, function (sprite, location) {
    info.changeScoreBy(1)
    music.bigCrash.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.wondy, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f 2 5 2 f . . . . . 
    . . . . . f 2 5 5 5 2 f . . . . 
    . . . . f f d d d d d f f . . . 
    . . . f f f d f d f d f f f . . 
    . . . . f f d d d d d f f . . . 
    . . f . f f d d d d d f f . f . 
    . . . f f . . . d . . . f f . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . 5 8 8 8 5 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    `, SpriteKind.wondy)
controller.moveSprite(mySprite, 90, 90)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("" + "E A G G A G A B " + "D F A F D A G G " + "A F A E G D F E " + "" + "", 70)
    music.playMelody("A F A E - D F E ", 200)
})
