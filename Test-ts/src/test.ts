/**
 * 変数に型をつける
 */
const test1:string = "aaa"
const test2:number = 123
const test3:boolean = true

/**
 * 配列に型をつける
 */
const test4:string[] = ["aaa","bbb"]
const test5:(string | number)[] = ["aaa",123]
const test6:[string,number] = ["aaa",123]

/**
 * アロー関数に型をつける
 */
//const 関数名 = (引数:型):戻り値 => {}
const test7 = (x1:string, y1:number):void => {   //返り値がない場合はvoidをつける
    console.log()
}

/**
 * 型の変換
 */
const test8:string = "123"
Number(test8)

/**
 * オブジェクトに型をつける
 */
const test9:{
    name:string,
    age:number
}={
    name:"ゆうじ",
    age:21
}

/**
 * interface
 */
interface AAA{
    name:string
    age:number
}
const test10:AAA = {
    name:"ゆうじ",
    age:21
}
//typeはオリジナルの型を作れる
type color = "白"|"黒"

