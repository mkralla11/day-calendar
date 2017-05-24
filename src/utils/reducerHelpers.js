import {map, merge} from 'ramda'

export function mergeOverrides(items, overrides={}){
  return map(
    (item)=>
      merge(item, overrides)
  , items)
}