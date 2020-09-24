import MyButton from './MyButton.js';

export default {
  title: 'MyButton',
  component: MyButton
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button />'
})
