
# why we use hook ?

- Hooks is use to update the view on changes in data.

## useState hooks

   - useState(intialValue) -> return a list that contain two item firs is initial value and second is a dispatchSetState function which are use in set the value.

   - [initialValue, dispatchSetState]
   - let [counter, setCounter] = useState(0)
   - counter = 0
   - setCounter -> dispatchSetState(fiber, queue, action){}
