import {TO_LINK, TO_LINK_DIRECTION, AVAILABLE_DIRECTIONS} from '../actions/create'
import {RESET_FIELDS} from '../actions/scene'

const initialState = {
}

export default function (state = initialState, action) {

    switch(action.type) {
      case TO_LINK:
        return {...state, linkId: action.linkId, linkName: action.linkName}
      case TO_LINK_DIRECTION:
        return {...state, linkDirection: action.direction}
        case AVAILABLE_DIRECTIONS:
        return {...state, availableDirections: getDirections(action.scene)}
        case RESET_FIELDS:
        return initialState
      default:
        return state
    }
  }

  const getDirections = scene => {
    let directions = {
      north: scene.north,
      east: scene.east,
      south: scene.south,
      west: scene.west,
      northeast: scene.northeast,
      southeast: scene.southeast,
      southwest: scene.southwest,
      northwest: scene.northwest
    }
    let paths = getPaths(directions)
    return paths
  }
  
  const getPaths = directions => {
      return  Object.keys(directions).filter(direction => !directions[direction])
  }