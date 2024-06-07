import React, { forwardRef, useMemo, useState } from 'react';
import { AlertProps } from './interface';
import css from 'classnames';
import { InfoCircleOutlined, 
         CheckCircleOutlined, 
         WarningOutlined, 
         CloseCircleOutlined 
} from '@ant-design/icons';



const Alert = (props: AlertProps, ref: any) => {
  const {
    style,
    className,
    type = 'info',
    title,
    content,
    showClear = false,
    showIcon = true,
    closeElement=<CloseCircleOutlined style={{ fontSize: '16px' }} />,
    onClose,
  } = props;

  const [visible, setVisible] = useState(true);

  const classNames = css(className, `alert-${type}`,{'alert-hidden': !visible});

  const leftIcon = useMemo(() => {
    switch (type) {
      case 'info':
        return <InfoCircleOutlined className="alert-icon-info" />;
      case 'success':
        return <CheckCircleOutlined className="alert-icon-success" />;
      case 'warning':
        return <WarningOutlined className="alert-icon-warning" />;
      case 'error':
        return <CloseCircleOutlined className="alert-icon-error" />;
      default:
        return <InfoCircleOutlined className="alert-icon-info" />;
    }
  }, [type]);

  const close = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };
  if (!visible) {
    return null;
  }
  return (
    <div className={classNames} ref={ref} style={style}>
      <div className="alert-content">
        {showIcon && <div className="alert-icon">{leftIcon}</div>}
        <div className="alert-text">
          {title && <div className="title">{title}</div>}
          {content}
        </div>
      </div>
      {showClear && (
        <div className="close-icon" onClick={close}>
          {closeElement}
        </div>
      )}
    </div>
  );
};

export default forwardRef<unknown, AlertProps>(Alert);
