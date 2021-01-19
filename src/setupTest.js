import Emzyme from 'enzyme'
import EmzymeAdapter from 'enzyme-adapter-react-16'

Emzyme.configure({
    adapter: new EmzymeAdapter(),
    disableLifecycleMethods: true
})