// import sum from "./13_1_mod.mjs"
// При импорте переменных их именна должны совпадать с экспортируемымиб
// однако, можно и переименовать
import { 
    sum,
    one as oneRenamed, 
    two
 } from "./13_1_mod.mjs"


const res = sum(2, 3)
console.log(res, oneRenamed, two)