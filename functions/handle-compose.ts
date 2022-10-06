import { Template } from '../constants/templates.ts';
import orderTemplate from '../views/step3/form_order/order.template.ts';
import expiredTemplate from '../views/step3/form_expired/expired.template.ts';
import traineeTemplate from '../views/step3/form_trainee/trainee.template.ts';

type HandleCompose = (props: {
  user: string | undefined;
  template: Template;
  values: {
    // deno-lint-ignore no-explicit-any
    [key: string]: any;
  };
}) => string;

const timeFormatted = () => {
  const n = new Date();
  const YY = String(n.getFullYear()).split('').slice(-2).join('');
  const MM = (n.getMonth() < 10 ? '0' : '') + n.getMonth();
  const DD = (n.getDate() < 10 ? '0' : '') + n.getDate();
  const DDD = n.toLocaleString('en-US', { weekday: 'short' });
  const T = n.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return `${DDD}, ${MM}-${DD}-${YY} at ${T}`;
};

const handleCompose: HandleCompose = ({ user, template }) => {
  // Construct the header
  const title = `*${template.title.toUpperCase()} :${template.emojiKey}:*`;
  const subtitle = `By <@${user}> | ${timeFormatted()}`;
  const header = `${title}\n${subtitle}\n----------`;

  // Construct the body
  const body: string = (() => {
    switch (template.key) {
      // Message: order
      case 'order':
        return orderTemplate({
          accountManager: 'TODO',
        });
      // Message: expired
      case 'expired':
        return expiredTemplate({
          name: 'TODO',
          quantity: 99,
          bbDate: 'TODO',
          accountManager: 'TODO',
        });
      // Message: trainee
      case 'trainee':
        return traineeTemplate({
          accountManager: 'TODO',
        });
      // Fallback
      default: {
        return 'Something went wrong.';
      }
    }
  })();

  return `${header}\n${body.trim()}`;
};

export default handleCompose;
