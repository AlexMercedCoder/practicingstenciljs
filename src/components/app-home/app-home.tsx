import { Component, h, Listen } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @Listen('myEvent', { capture: true })
  handleMyEvent(event: any) {
    console.log(event);
  }

  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
        <my-button text="hello">
          <h1 slot="cheese">Hello World</h1>
        </my-button>
        <my-button text="cheese">
          <h1>Hello World</h1>
        </my-button>
        <my-button text="gouda">
          <h1>Hello World</h1>
        </my-button>
      </div>
    );
  }
}
