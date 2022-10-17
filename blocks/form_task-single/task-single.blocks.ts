import ids from '../../constants/block-ids.ts';
import { SelectOptionBlock } from '../../types/types.ts';
import { divider, plain } from '../../helpers/helpers.ts';

type Option = (props: {
  value: string;
  text: string;
}) => SelectOptionBlock;

const timingText = {
  earlier: 'Earlier — near the start of the shift',
  standard: 'Standard — alongside related tasks',
  later: 'Later — near the end of the shift',
  unsure: 'Unsure — determine in context',
};

const option: Option = ({ value, text }) => ({
  value,
  text: {
    text,
    type: 'plain_text',
    emoji: true,
  },
});

const actionTypeOptions = [
  option({
    value: 'add',
    text: ':new: Add a task',
  }),
  option({
    value: 'remove',
    text: ':end: Remove a task',
  }),
  option({
    value: 'update',
    text: ':arrows_counterclockwise: Update a task',
  }),
  option({
    value: 'reorder',
    text: ':arrow_up_down: Reorder a task',
  }),
];

const actionType = {
  type: 'input',
  block_id: ids.taskSingle.actionType,
  label: plain('Request Type'),
  element: {
    type: 'static_select',
    action_id: 'action',
    placeholder: plain('Select'),
    options: actionTypeOptions,
  },
};

const timingOptions = [
  option({
    value: 'earlier',
    text: timingText.earlier,
  }),
  option({
    value: 'standard',
    text: timingText.standard,
  }),
  option({
    value: 'later',
    text: timingText.later,
  }),
  option({
    value: 'unsure',
    text: timingText.unsure,
  }),
];

const timing = {
  type: 'input',
  block_id: ids.taskSingle.timing,
  label: plain('Priority/Timing'),
  element: {
    type: 'static_select',
    action_id: 'action',
    initial_option: timingOptions.find((o) => o.value === 'standard'),
    options: timingOptions,
  },
};

const taskRequest = {
  type: 'input',
  block_id: ids.taskSingle.taskRequest,
  label: plain('Task Request'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    placeholder: plain('Describe'),
  },
};

const taskZone = {
  type: 'input',
  block_id: ids.taskSingle.taskZone,
  label: plain('Task Zone'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    placeholder: plain('L7 Main Kitchen'),
  },
};

const taskNote = {
  type: 'input',
  block_id: ids.taskSingle.taskNote,
  optional: true,
  label: plain('Task Note'),
  hint: plain('Note under the task title, if needed for additional info'),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    placeholder: plain('Blank'),
  },
};

export const taskSingleBlocks = [
  actionType,
  timing,
  divider,
  taskRequest,
  taskZone,
  taskNote,
];
