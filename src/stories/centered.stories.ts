import { moduleMetadata, storiesOf } from '@storybook/angular';
import { centered } from '@storybook/addon-centered/angular';
import ButtonComponent from '@storybook/angular/dist/demo/button.component';


storiesOf('Addon|Centered', module)
  .addDecorator(moduleMetadata({
    declarations: [ButtonComponent]
  }))
  .addDecorator(centered)
  .add('centered template', () => ({
    template: `<storybook-button-component
        [text]="text" (onClick)="onClick($event)">
      </storybook-button-component>`,
    props: {
      text: 'Hello Button',
      onClick: event => {
        console.log('some bindings work');
        console.log(event);
      },
    },
  }));
