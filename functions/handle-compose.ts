import { HandleCompose } from '../types/types.ts';
import { formatDate } from '../helpers/helpers.ts';
import { signageCompose } from '../blocks/form_signage/signage.compose.ts';
import { equipmentCompose } from '../blocks/form_equipment/equipment.compose.ts';
import { qcStartingCompose } from '../blocks/form_qc-starting/qc-starting.compose.ts';
import { qcRemarksCompose } from '../blocks/form_qc-remarks/qc-remarks.compose.ts';
import { traineeCompose } from '../blocks/form_trainee/trainee.compose.ts';
import { orderCompose } from '../blocks/form_order/order.compose.ts';
import { droCompose } from '../blocks/form_dro/dro.compose.ts';

export const handleCompose: HandleCompose = (props) => {
  // console.log(values);

  const { user, template, values } = props;
  const { title, emojiKey, isSlackDeprecated } = template;
  const emojiPrefix = isSlackDeprecated ? '' : `:${emojiKey}: | `;

  // Construct the header
  const subtitle = `${emojiPrefix}By <@${user}> | ${formatDate()}`;
  const header = `*${title.toUpperCase()}*\n${subtitle}\n----------`;

  // Construct the body
  const body: string = (() => {
    switch (template.key) {
      case 'signage':
        return signageCompose({ values });
      case 'equipment':
        return equipmentCompose({ values });
      case 'trainee':
        return traineeCompose({ values });
      case 'qcStarting':
        return qcStartingCompose({ values });
      case 'qcRemarks':
        return qcRemarksCompose();
      case 'order':
        return orderCompose({ values });
      case 'dro':
        return droCompose({ values });
      default: {
        return 'No case found for this template key.';
      }
    }
  })();

  return `${header}\n${body.trim()}`;
};
