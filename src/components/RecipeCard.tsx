import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './ui/Card';
import { Colors } from '../constants/Colors';
import { Layout } from '../constants/Layout';
import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
  showLockIcon?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onPress,
  showLockIcon = false,
}) => {
  const difficultyColor = {
    easy: Colors.system.success,
    medium: Colors.system.warning,
    hard: Colors.system.error,
  }[recipe.difficulty];

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card variant="elevated" style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: recipe.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          {showLockIcon && recipe.isPlusOnly && (
            <View style={styles.lockContainer}>
              <Ionicons name="lock-closed" size={16} color={Colors.primary.white} />
            </View>
          )}
          <View style={[styles.difficultyBadge, { backgroundColor: difficultyColor }]}>
            <Text style={styles.difficultyText}>{recipe.difficulty}</Text>
          </View>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {recipe.name}
          </Text>
          
          <View style={styles.meta}>
            <View style={styles.metaItem}>
              <Ionicons name="time-outline" size={14} color={Colors.text.secondary} />
              <Text style={styles.metaText}>{recipe.prepTime}m</Text>
            </View>
            
            <View style={styles.metaItem}>
              <Ionicons name="restaurant-outline" size={14} color={Colors.text.secondary} />
              <Text style={styles.metaText}>{recipe.category}</Text>
            </View>
          </View>
          
          <View style={styles.tags}>
            {recipe.tags.slice(0, 2).map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 160,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F7FAFC',
  },
  lockContainer: {
    position: 'absolute',
    top: Layout.spacing.sm,
    right: Layout.spacing.sm,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: Layout.borderRadius.sm,
    padding: Layout.spacing.xs,
  },
  difficultyBadge: {
    position: 'absolute',
    bottom: Layout.spacing.sm,
    left: Layout.spacing.sm,
    paddingHorizontal: Layout.spacing.sm,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.sm,
  },
  difficultyText: {
    color: Colors.primary.white,
    fontSize: Layout.fontSize.xs,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  content: {
    padding: Layout.spacing.md,
  },
  title: {
    fontSize: Layout.fontSize.lg,
    fontWeight: '700',
    color: Colors.text.primary,
    marginBottom: Layout.spacing.sm,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Layout.spacing.sm,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Layout.spacing.md,
  },
  metaText: {
    fontSize: Layout.fontSize.sm,
    color: Colors.text.secondary,
    marginLeft: Layout.spacing.xs,
    textTransform: 'capitalize',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: Colors.primary.matcha + '20',
    paddingHorizontal: Layout.spacing.sm,
    paddingVertical: Layout.spacing.xs,
    borderRadius: Layout.borderRadius.sm,
    marginRight: Layout.spacing.xs,
    marginBottom: Layout.spacing.xs,
  },
  tagText: {
    fontSize: Layout.fontSize.xs,
    color: Colors.primary.matcha,
    fontWeight: '500',
  },
});