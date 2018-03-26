package app

import kotlinx.html.js.onClickFunction
import kotlinx.html.style
import react.*
import react.dom.button
import react.dom.div

interface CounterProps : RProps {
    var increment: Int
}

interface CounterState : RState {
    var value: Int
}

class Counter(props: CounterProps) : RComponent<CounterProps, CounterState>(props) {
    override fun CounterState.init(props: CounterProps) {
        value = 0;
    }

    override fun RBuilder.render() {
        div("Counter") {
            div {
                +"Button has been clicked ${state.value} times."
            }
            button {
                +"Embiggen"
                attrs.onClickFunction = {
                    setState { value += 1 }
                }
                attrs.style = kotlinext.js.js { backgroundColor = "hotpink" }
            }
        }
    }
}

fun RBuilder.counter(increment: Int) = child(Counter::class) {
    attrs.increment = increment
}
