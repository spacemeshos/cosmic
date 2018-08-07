import * as React from "react";
import { Button, StyleSheet, View, TextInput } from "react-native";
// create css for this page
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row"
  },
  button: {
    flex: 1,
    paddingVertical: 0,
    marginTop: 20
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  }
});

export interface IProps {
  input?: string,
  onClick: (text: string) => void,
}

interface IState {
  input: string,
}

class Sample extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.setText = this.setText.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {
      input: this.props.input || ""
    };
  }

  /**
   * onClick
   * 
   * @description handles click event
   */
  public onClick(){
    const {onClick} = this.props;
    onClick(this.state.input)
  }

  /**
   * setText
   * 
   * @description updates state with text input value
   * @param {String} text
   */
  public setText(text: string){
    this.setState({
      input: text
    })
  }

  // Render page
  public render() {
    return (
      <View style={styles.root}>
        <TextInput
          onChangeText={this.setText}
          placeholder="Enter text to display below"
          value={this.state.input}
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, padding: 10, marginTop: 20}}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Submit"
              onPress={this.onClick}
              accessibilityLabel="submit"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Sample;
