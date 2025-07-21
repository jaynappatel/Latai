import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  // Get variant style
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary': return styles.primary;
      case 'secondary': return styles.secondary;
      case 'outline': return styles.outline;
      case 'ghost': return styles.ghost;
      default: return styles.primary;
    }
  };

  // Get size style
  const getSizeStyle = () => {
    switch (size) {
      case 'small': return styles.small;
      case 'medium': return styles.medium;
      case 'large': return styles.large;
      default: return styles.medium;
    }
  };

  // Get text variant style
  const getTextVariantStyle = () => {
    switch (variant) {
      case 'primary': return styles.primaryText;
      case 'secondary': return styles.secondaryText;
      case 'outline': return styles.outlineText;
      case 'ghost': return styles.ghostText;
      default: return styles.primaryText;
    }
  };

  // Get text size style
  const getTextSizeStyle = () => {
    switch (size) {
      case 'small': return styles.smallText;
      case 'medium': return styles.mediumText;
      case 'large': return styles.largeText;
      default: return styles.mediumText;
    }
  };

  const buttonStyle = [
    styles.base,
    getVariantStyle(),
    getSizeStyle(),
    disabled && styles.disabled,
    style,
  ];

  const buttonTextStyle = [
    styles.text,
    getTextVariantStyle(),
    getTextSizeStyle(),
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? Colors.primary.white : Colors.primary.pink}
          size="small"
        />
      ) : (
        <Text style={buttonTextStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Layout.borderRadius.lg,
    paddingHorizontal: Layout.spacing.lg,
  },
  // Variants
  primary: {
    backgroundColor: Colors.primary.pink,
  },
  secondary: {
    backgroundColor: Colors.primary.matcha,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primary.pink,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  // Sizes
  small: {
    height: 36,
    paddingHorizontal: Layout.spacing.md,
  },
  medium: {
    height: 48,
  },
  large: {
    height: 56,
    paddingHorizontal: Layout.spacing.xl,
  },
  // States
  disabled: {
    opacity: 0.5,
  },
  // Text styles
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryText: {
    color: Colors.primary.white,
    fontSize: Layout.fontSize.md,
  },
  secondaryText: {
    color: Colors.primary.white,
    fontSize: Layout.fontSize.md,
  },
  outlineText: {
    color: Colors.primary.pink,
    fontSize: Layout.fontSize.md,
  },
  ghostText: {
    color: Colors.primary.pink,
    fontSize: Layout.fontSize.md,
  },
  smallText: {
    fontSize: Layout.fontSize.sm,
  },
  mediumText: {
    fontSize: Layout.fontSize.md,
  },
  largeText: {
    fontSize: Layout.fontSize.lg,
  },
  disabledText: {
    opacity: 0.7,
  },
});