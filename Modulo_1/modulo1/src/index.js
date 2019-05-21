import "./config/ReactotronConfig";
import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Todo from "~/components/Todo";

// Ciclo de vida de um componente: Criado, atualizado e desmontado
//componentDidMount: Ocorre depois do render(), pode ser usado para chamadas de Apis por exemplo.
//getDerivedStateFromProps: Nao tem acesso ao contexto 'this'. Método utilizado apenas quando tem alguma variave no state que depende de algum valor das propriedades.
//executado antes do componentDidMount e quando ocorrer alguma atualizacao em props ou state do componente
// nextProps: estado da propriedade atualizada
// prevState: estado da propriedade antes de atualizacao.
//shouldComponentUpdate: Metodo executado a cada atualizacao antes mesmo do componente ser atualizado.
//Previne que o render() seja executado, por questoes de performance.
//componentDidUpdate: Executado se o shouldComponentUpdate retornar true dizendo que o componente pode ser atualizado.
export default class App extends Component {
  state = {
    counter: 0,
    usuario: "Diego",
    todos: [
      {
        id: 0,
        text: "Estudar loucamente"
      },
      {
        id: 1,
        text: "Outra tarefa insana"
      }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: Math.random(),
            text: "Passou pelo componentDidMount"
          }
        ]
      });
    }, 0);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      text: nextProps.text
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 6;
  }

  componentDidUpdate(prevProps, prevState) {
    console.tron.log(this.state);
  }

  componentWillUnmount() {}

  handleAddCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  addTodo = () => {
    this.setState({
      // usuario: this.state.usuario + 3,
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          text: "Novo Baguio pra fazer"
        }
      ]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> {this.state.usuario} </Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} id={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionario" onPress={this.addTodo} />
        <Text> {this.state.counter} </Text>
        <Button title="Add count" onPress={this.handleAddCounter} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
