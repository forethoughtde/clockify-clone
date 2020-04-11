import './../../css/button.css'
import notification_icon from './../../img/notification.svg'

export default { title: 'Button' };

const notificationImageAttributes = {
  src: notification_icon,
  alt: 'bell icon',
};

const notificationButtonTemplate =
  `  
    <button class="btn_icon"><img src=${notificationImageAttributes.src} alt=${notificationImageAttributes.alt} /></button>
  `

export const NotificationButton = () => notificationButtonTemplate;

