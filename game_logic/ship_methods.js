function checkForShip(player, guessedCoordinates) {
    let shipPresent, ship

    for (let i = 0; i < player.ships.length; i++) {
        ship = player.ships[i]

        shipPresent = ship.locations.filter(actualCoordinate => {
            return (actualCoordinate[0] === guessedCoordinates[0]) && (actualCoordinate[1] === guessedCoordinates[1])
        })[0]

        if (shipPresent) {
            return ship
        }
    }

    return false
}

function damageShip(ship, coordinates) {
    ship.damage.push(coordinates)
}

function fire(player, coordinates) {
    let ship = checkForShip(player, coordinates)

    if (ship) {
        damageShip(ship, coordinates)
    }
}

module.exports.checkForShip = checkForShip
module.exports.damageShip = damageShip
module.exports.fire = fire