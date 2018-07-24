import { connect } from 'react-redux'
import { IState } from '../../reducers'
import { getInput } from '../../selectors/input'
import { addItem } from '../../actions/input'
import FirstPage from '../../components/FirstPage'

const mapStateToProps = (state: IState) => ({
  input: getInput(state)
})

const mapDispatchToProps = {
  onClicked: addItem
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(FirstPage)