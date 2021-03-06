import { Component, h, Host, Prop, State, Event, EventEmitter } from '@stencil/core';
import { apidata } from '../types';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() text: string;
  @State() count: number = 0;
  @State() data: apidata;


  @Event() myEvent:EventEmitter<apidata>

  // @Listen('click', { capture: true })
  handleClick() {
    this.count = this.count + 1;
    this.myEvent.emit(this.data)
  }

  connectedCallback() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.data = json;
        console.log(json);
      });
  }

  render() {
    return (
      <Host>
        <h1>{this.count}</h1>
        <slot name="cheese"></slot>
        <h2>{this.data ? this.data.title : 'loading'}</h2>
        <slot></slot>
        <button onClick={() => this.handleClick()}>{this.text}</button>
      </Host>
    );
  }
}
