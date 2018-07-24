
import * as React from "react";

import { StyleSheet, View, Text } from "react-native";
import  { InputModel } from "../../model";
import Routing from '../../utils/routing';

const { Link } = Routing;

// styles
const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  buttons: {
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#000", 
    borderRadius: 2, 
    padding: 10
  },
  buttonText: {
    "color": "#fff", 
  },
  marginTop: {
    marginTop: 20,
  }
});

export interface IProps {
  input: InputModel ,
  onClicked: (text: string) => void,
}

interface IState {
  input: InputModel,
}

class FirstPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.root}>
          <Text style={{color: "#000", fontSize: 15}}>Welcome to Second Page</Text>
          <View style={styles.button}>
            <Link to="/">
              <Text style={styles.buttonText}>Back to Page 1</Text>
            </Link>
          </View>
      </View>
    );
  }
}

export default FirstPage;