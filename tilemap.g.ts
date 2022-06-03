// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010001000000000000000000000000000000010101010100000000010100010101000000000001010101000001000100010101010100000000010100010101000101000001000001000101000000000000000001010000010001000000000000000000010000010100010001010101010101000100010101000100010000000000010001000100000000000100010101000101010001000000010101000100010000000000010000000100000001000101010001000101010001000101010000000100000000000100010001000000000001010100010001000000010000000000000001000000010001010100000000000000010101010100`, img`
2 2 2 2 2 2 2 2 . 2 . . . . . . 
. . . . . . . . . 2 2 2 2 2 . . 
. . 2 2 . 2 2 2 . . . . . 2 2 2 
2 . . 2 . 2 . 2 2 2 2 2 . . . . 
2 2 . 2 2 2 . 2 2 . . 2 . . 2 . 
2 2 . . . . . . . . 2 2 . . 2 . 
2 . . . . . . . . . 2 . . 2 2 . 
2 . 2 2 2 2 2 2 2 . 2 . 2 2 2 . 
2 . 2 . . . . . 2 . 2 . 2 . . . 
. . 2 . 2 2 2 . 2 2 2 . 2 . . . 
2 2 2 . 2 . 2 . . . . . 2 . . . 
2 . . . 2 . 2 2 2 . 2 . 2 2 2 . 
2 . 2 2 2 . . . 2 . . . . . 2 . 
2 . 2 . . . . . 2 2 2 . 2 . 2 . 
. . 2 . . . . . . . 2 . . . 2 . 
2 2 2 . . . . . . . 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
