import { Story } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata } from '@storybook/angular';
import { TaskModule } from './../task.module';
import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from 'src/app/state/task.state';
import { fireEvent, within } from '@storybook/testing-library';

export default {
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      declarations: [PureInboxScreenComponent],
      imports: [CommonModule, TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
  title: 'PureInboxScreen',
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await fireEvent.click(canvas.getByLabelText('pinTask-1'));
  await fireEvent.click(canvas.getByLabelText('pinTask-3'));
};
