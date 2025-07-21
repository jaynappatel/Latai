import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
interface FilterChipProps {
  label: string;
  selected?: boolean;
  onPress: () => void;
}

export const FilterChip: React.FC<FilterChipProps> = ({
  label,
  selected = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.chip, selected && styles.selected]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.sm,
    borderRadius: Layout.borderRadius.xl,
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginRight: Layout.spacing.sm,
  },
  selected: {
    backgroundColor: Colors.primary.pink,
    borderColor: Colors.primary.pink,
  },
  text: {
    fontSize: Layout.fontSize.sm,
    fontWeight: '500',
    color: Colors.text.secondary,
  },
  selectedText: {
    color: Colors.primary.white,
  },
});