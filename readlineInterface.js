import {createInterface} from 'readline'

export const rl1 = createInterface({
    input : process.stdin,
    output : process.stdout,
    terminal : false
})