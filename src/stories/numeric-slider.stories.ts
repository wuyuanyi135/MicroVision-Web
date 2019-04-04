import {moduleMetadata, storiesOf} from '@storybook/angular';
import {NumericSliderComponent} from '../app/acquisition/configure-panel/numeric-slider/numeric-slider.component';
import {MaterialModule} from '../app/import-modules/material.module';
import {withKnobs, number} from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';
import {AngularBaseModule} from '../app/import-modules/angular-base.module';
storiesOf('numeric-slider', module)
  .addDecorator(moduleMetadata({
    imports: [AngularBaseModule, MaterialModule],
    declarations: [NumericSliderComponent],
  }))
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('default', () => ({
    // language=Angular2Html
    template: `<app-numeric-slider [max]="max" [min]="min" [tick]="tick"></app-numeric-slider>`,
  props: {
    min: number('min', 0, {}, 'value'),
    max: number('max', 44, {}, 'value'),
    tick: number('tick', 2, {}, 'value')
  },
}));
