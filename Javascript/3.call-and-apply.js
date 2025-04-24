export function func(this, arg){
    console.log(this)
    console.log(arg)
}

func.call(new Date, "Hi")
func.apply(new Date, ["Hi"])