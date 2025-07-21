import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calculateAverageRating, getAllRecipes, getRecipesByCategory, searchRecipes } from './data/recipes';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [currentScreen, setCurrentScreen] = useState('recipes');
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [savedRecipes, setSavedRecipes] = useState<string[]>([]);
  const [showReviews, setShowReviews] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', userName: '' });

 const categories = ['All', 'Coffee', 'Tea', 'Matcha', 'Mocktails', 'Iced'];
 const getCategoryKey = (category: string) => {
  const mapping: { [key: string]: string } = {
    'All': 'all',
    'Coffee': 'coffee',
    'Tea': 'tea', 
    'Matcha': 'matcha',
    'Mocktails': 'mocktails',
    'Iced': 'iced'
  };
  return mapping[category] || category.toLowerCase();
};

const getFilteredRecipes = () => {
  if (activeCategory === 'All') {
    return [
      { title: 'COFFEE RECIPES', key: 'coffee' },
      { title: 'TEA RECIPES', key: 'tea' },
      { title: 'MATCHA RECIPES', key: 'matcha' },
      { title: 'MOCKTAILS', key: 'mocktails' },
      { title: 'ICED DRINKS', key: 'iced' }
    ];
  } else {
    const categoryKey = getCategoryKey(activeCategory);
    return [{ title: `${activeCategory.toUpperCase()} RECIPES`, key: categoryKey }];
  }
};

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // ========== SPLASH SCREEN ==========
  const renderSplash = () => (
    <View style={styles.splashContainer}>
      <Image 
        source={require('./assets/images/openPage.png')} 
        style={styles.splashLogo}
        resizeMode="contain"
      />
    </View>
  );
  

  // ========== PROFILE SCREEN ==========
  const renderProfileScreen = () => (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
        <TouchableOpacity onPress={() => setCurrentScreen('recipes')}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Profile</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <Image source={require('./assets/images/profileIcon.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Welcome to LATAI!</Text>
          <Text style={styles.profileEmail}>user@latai.com</Text>
        </View>
        
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>My Recipes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>About LATAI</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {renderBottomNav()}
    </View>
  );

  // ========== SAVED PHOTOS SCREEN ==========
  const renderSavedPhotosScreen = () => (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
        <TouchableOpacity onPress={() => setCurrentScreen('recipes')}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Saved Photos</Text>
        <TouchableOpacity>
          <Text style={styles.addButton}>+ Add</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>YOUR PHOTO GALLERY</Text>
        <View style={styles.photoGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <TouchableOpacity key={item} style={styles.photoCard}>
              <View style={styles.photoPlaceholder}>
                <Text style={styles.photoText}>📸</Text>
                <Text style={styles.photoSubText}>Photo {item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      {renderBottomNav()}
    </View>
  );

// ========== SAVED RECIPES FUNCTIONS ==========
const toggleSaveRecipe = (recipeId: string) => {
  setSavedRecipes(prev => {
    if (prev.includes(recipeId)) {
      // Remove from saved
      return prev.filter(id => id !== recipeId);
    } else {
      // Add to saved
      return [...prev, recipeId];
    }
  });
};

const isRecipeSaved = (recipeId: string) => {
  return savedRecipes.includes(recipeId);
};

const getSavedRecipeObjects = () => {
  const allRecipes = getAllRecipes();
  return allRecipes.filter(recipe => savedRecipes.includes(recipe.id));
};
// ========== SAVED RECIPES SCREEN ==========
const renderSavedRecipesScreen = () => (
  <View style={styles.container}>
    <View style={styles.screenHeader}>
      <TouchableOpacity onPress={() => setCurrentScreen('recipes')}>
        <Text style={styles.backButton}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.screenTitle}>Saved Recipes</Text>
      <View style={styles.placeholder} />
    </View>
    
    <ScrollView style={styles.content}>
      <Text style={styles.sectionTitle}>YOUR SAVED RECIPES</Text>
      
      {getSavedRecipeObjects().length > 0 ? (
        <View style={styles.savedRecipesGrid}>
          {getSavedRecipeObjects().map((recipe) => (
            <TouchableOpacity 
              key={recipe.id} 
              style={styles.savedRecipeCard}
              onPress={() => {
                setSelectedRecipe(recipe);
                setCurrentScreen('recipeDetail');
              }}
            >
              <Image source={{ uri: recipe.image }} style={styles.savedRecipeImage} />
              <View style={styles.savedRecipeInfo}>
                <Text style={styles.savedRecipeTitle}>{recipe.name}</Text>
                <Text style={styles.savedRecipeMeta}>{recipe.difficulty} • {recipe.prepTime}</Text>
                <Text style={styles.savedRecipeCategory}>{recipe.category.toUpperCase()}</Text>
              </View>
              
              {/* Unsave Button */}
              <TouchableOpacity 
                style={styles.unsaveButton}
                onPress={(e) => {
                  e.stopPropagation();
                  toggleSaveRecipe(recipe.id);
                }}
              >
                <Text style={styles.unsaveButtonText}>❤️</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.noSavedRecipes}>
          <Text style={styles.noSavedRecipesTitle}>No Saved Recipes Yet</Text>
          <Text style={styles.noSavedRecipesText}>
            Start exploring recipes and save your favorites by tapping the heart icon!
          </Text>
          <TouchableOpacity 
            style={styles.exploreButton}
            onPress={() => setCurrentScreen('recipes')}
          >
            <Text style={styles.exploreButtonText}>EXPLORE RECIPES</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
    
    {renderBottomNav()}
  </View>
);

// ========== HOME/RECIPE SCREEN (with working search) ==========
const renderRecipeScreen = () => {
  // Get recipes based on search or category filter
  const getDisplayRecipes = () => {
    if (searchText.trim().length > 0) {
      // Show search results
      const results = searchRecipes(searchText.trim());
      return [{
        title: `SEARCH RESULTS FOR "${searchText.toUpperCase()}"`,
        recipes: results,
        key: 'search'
      }];
    } else {
      // Show category filtered results
      return getFilteredRecipes().map(section => ({
        title: section.title,
        recipes: getRecipesByCategory(section.key),
        key: section.key
      }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.logoSection}>
          <Image source={require('./assets/images/logo.png')} style={styles.headerIcon} />
          <Text style={styles.lataiTitle}>LATAI</Text>
        </View>
        <TouchableOpacity onPress={() => setCurrentScreen('profile')}>
          <Image source={require('./assets/images/profileIcon.png')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes..."
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity 
              style={styles.searchIcon} 
              onPress={() => setSearchText('')}
            >
              <Text style={styles.searchIconText}>✕</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.searchIcon}>
              <Text style={styles.searchIconText}>🔍</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Hide category tabs when searching */}
      {searchText.trim().length === 0 && (
        <View style={styles.tabBar}>
          {categories.map((category) => (
            <TouchableOpacity key={category} style={styles.tab} onPress={() => setActiveCategory(category)}>
              <Text style={[styles.tabText, activeCategory === category && styles.activeTabText]}>{category}</Text>
              {activeCategory === category && <View style={styles.activeUnderline} />}
            </TouchableOpacity>
          ))}
        </View>
      )}

      <ScrollView style={styles.recipeContent} showsVerticalScrollIndicator={false}>
        {getDisplayRecipes().map((section) => (
          <View key={section.key} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            
            {section.recipes.length > 0 ? (
              <View style={styles.recipeGrid}>
                {section.recipes.map((recipe: any) => (
  <TouchableOpacity 
    key={recipe.id} 
    style={styles.recipeCard}
    onPress={() => {
      setSelectedRecipe(recipe);
      setCurrentScreen('recipeDetail');
    }}
  >
    <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
    <View style={styles.recipeInfo}>
      <Text style={styles.recipeTitle}>{recipe.name}</Text>
      <Text style={styles.recipeMeta}>{recipe.difficulty} • {recipe.prepTime}</Text>
    </View>
  </TouchableOpacity>
))}
              </View>
            ) : (
              <View style={styles.noResultsContainer}>
                <Text style={styles.noResultsText}>
                  {searchText.trim().length > 0 
                    ? `No recipes found for "${searchText}"`
                    : "Coming soon... Stay tuned! 🍹"
                  }
                </Text>
                {searchText.trim().length > 0 && (
                  <TouchableOpacity 
                    style={styles.clearSearchButton}
                    onPress={() => setSearchText('')}
                  >
                    <Text style={styles.clearSearchText}>Clear Search</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      {renderBottomNav()}
    </View>
  );
};
// ========== REVIEWS SCREEN ==========
const renderReviewsScreen = () => {
  if (!selectedRecipe) return null;

  const handleSubmitReview = () => {
    if (newReview.userName.trim() && newReview.comment.trim()) {
      // In a real app, this would sync with a backend
      const updatedReviews = [
        {
          id: `review_${Date.now()}`,
          userName: newReview.userName,
          rating: newReview.rating,
          comment: newReview.comment,
          date: new Date().toISOString().split('T')[0]
        },
        ...(selectedRecipe.reviews || [])
      ];
      
      selectedRecipe.reviews = updatedReviews;
      selectedRecipe.reviewCount = updatedReviews.length;
      selectedRecipe.averageRating = calculateAverageRating(updatedReviews);
      
      setNewReview({ rating: 5, comment: '', userName: '' });
      Alert.alert('Success', 'Your review has been added!');
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.recipeDetailHeader}>
        <TouchableOpacity onPress={() => setCurrentScreen('recipeDetail')}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.lataiTitle}>REVIEWS</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.reviewsContent}>
        {/* Recipe Summary */}
        <View style={styles.reviewsHeader}>
          <Image source={{ uri: selectedRecipe.image }} style={styles.reviewRecipeImage} />
          <View style={styles.reviewRecipeInfo}>
            <Text style={styles.reviewRecipeTitle}>{selectedRecipe.name}</Text>
            <View style={styles.overallRating}>
              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Text key={star} style={styles.starLarge}>
                    {star <= (selectedRecipe.averageRating || 0) ? '★' : '☆'}
                  </Text>
                ))}
              </View>
              <Text style={styles.ratingText}>
                {selectedRecipe.averageRating || 0} out of 5 ({selectedRecipe.reviewCount || 0} reviews)
              </Text>
            </View>
          </View>
        </View>

        {/* Add Review Section */}
        <View style={styles.addReviewSection}>
          <Text style={styles.sectionHeader}>WRITE A REVIEW</Text>
          
          <Text style={styles.inputLabel}>Your Name</Text>
          <TextInput
            style={styles.reviewInput}
            value={newReview.userName}
            onChangeText={(text) => setNewReview({...newReview, userName: text})}
            placeholder="Enter your name"
          />

          <Text style={styles.inputLabel}>Rating</Text>
          <View style={styles.ratingInput}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setNewReview({...newReview, rating: star})}
              >
                <Text style={styles.starInput}>
                  {star <= newReview.rating ? '★' : '☆'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.inputLabel}>Your Review</Text>
          <TextInput
            style={styles.reviewTextArea}
            value={newReview.comment}
            onChangeText={(text) => setNewReview({...newReview, comment: text})}
            placeholder="Share your thoughts about this recipe..."
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.submitReviewButton} onPress={handleSubmitReview}>
            <Text style={styles.submitReviewText}>SUBMIT REVIEW</Text>
          </TouchableOpacity>
        </View>

        {/* Existing Reviews */}
        <View style={styles.reviewsList}>
          <Text style={styles.sectionHeader}>ALL REVIEWS</Text>
         {(selectedRecipe.reviews || []).map((review: any, index: number) => (
            <View key={review.id || index} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewUserName}>{review.userName}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <View style={styles.reviewRating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Text key={star} style={styles.starSmall}>
                    {star <= review.rating ? '★' : '☆'}
                  </Text>
                ))}
              </View>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

// ========== RECIPE DETAIL SCREEN (Updated) ==========
const renderRecipeDetailScreen = () => {
  if (!selectedRecipe) return null;
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.recipeDetailHeader}>
        <TouchableOpacity onPress={() => {
          setSelectedRecipe(null);
          setCurrentScreen('recipes');
        }}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.lataiTitle}>LATAI</Text>
        <TouchableOpacity onPress={() => setCurrentScreen('profile')}>
          <Image source={require('./assets/images/profileIcon.png')} style={styles.profileIconSmall} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.recipeDetailContent} showsVerticalScrollIndicator={false}>
        {/* Recipe Title */}
        <Text style={styles.recipeDetailTitle}>{selectedRecipe.name.toUpperCase()}</Text>
        
        {/* Recipe Image */}
        <View style={styles.recipeImageContainer}>
          <Image source={{ uri: selectedRecipe.image }} style={styles.recipeDetailImage} />
        </View>

        {/* Ingredients Section */}
        <View style={styles.ingredientsSection}>
          <Text style={styles.sectionHeader}>INGREDIENTS</Text>
          
          {selectedRecipe.ingredients?.map((ingredient: string, index: number) => (
            <View key={index} style={styles.ingredientItem}>
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        {/* Make Me Button */}
<     TouchableOpacity style={styles.makeMeButton}>
        <Text style={styles.makeMeButtonText}>MAKE ME</Text>
      </TouchableOpacity>

{/* Save Recipe Button */}
<TouchableOpacity 
  style={[styles.saveRecipeButton, isRecipeSaved(selectedRecipe.id) && styles.saveRecipeButtonSaved]}
  onPress={() => toggleSaveRecipe(selectedRecipe.id)}
>
  <Text style={styles.saveRecipeButtonText}>
    {isRecipeSaved(selectedRecipe.id) ? '❤️ SAVED' : '🤍 SAVE RECIPE'}
  </Text>
</TouchableOpacity>

        {/* Instructions Section */}
        {selectedRecipe.instructions && (
          <View style={styles.instructionsSection}>
            <Text style={styles.sectionHeader}>INSTRUCTIONS</Text>
            {selectedRecipe.instructions.map((step: string, index: number) => (
              <View key={index} style={styles.instructionItem}>
                <Text style={styles.instructionNumber}>{index + 1}.</Text>
                <Text style={styles.instructionText}>{step}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Reviews Section - Under Instructions */}
        <View style={styles.reviewsSummarySection}>
          <Text style={styles.sectionHeader}>REVIEWS</Text>
          
          {/* Overall Rating Display */}
          <View style={styles.overallRatingContainer}>
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((star: number) => (
                <Text key={star} style={styles.starLarge}>
                  {star <= (selectedRecipe.averageRating || 0) ? '★' : '☆'}
                </Text>
              ))}
            </View>
            <Text style={styles.ratingText}>
              {selectedRecipe.averageRating || 0} out of 5 ({selectedRecipe.reviewCount || 0} reviews)
            </Text>
          </View>

          {/* Recent Reviews Preview */}
          {selectedRecipe.reviews && selectedRecipe.reviews.length > 0 && (
            <View style={styles.recentReviews}>
              {selectedRecipe.reviews.slice(0, 2).map((review: any, index: number) => (
                <View key={review.id || index} style={styles.reviewPreview}>
                  <View style={styles.reviewPreviewHeader}>
                    <Text style={styles.reviewPreviewUser}>{review.userName}</Text>
                    <View style={styles.reviewPreviewStars}>
                      {[1, 2, 3, 4, 5].map((star: number) => (
                        <Text key={star} style={styles.starSmall}>
                          {star <= review.rating ? '★' : '☆'}
                        </Text>
                      ))}
                    </View>
                  </View>
                  <Text style={styles.reviewPreviewComment} numberOfLines={2}>
                    {review.comment}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* View All Reviews Button */}
          <TouchableOpacity 
            style={styles.viewAllReviewsButton}
            onPress={() => setCurrentScreen('reviews')}
          >
            <Text style={styles.viewAllReviewsText}>
              {selectedRecipe.reviewCount > 0 ? 'VIEW ALL REVIEWS' : 'BE THE FIRST TO REVIEW'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {renderBottomNav()}
    </View>
  );
};
  // ========== BOTTOM NAVIGATION ==========
 const renderBottomNav = () => (
  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => setCurrentScreen('savedPhotos')}>
      <Image source={require('./assets/images/CameraIcon.png')} style={styles.cameraIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setCurrentScreen('recipes')}>
      <Image source={require('./assets/images/RecipeIcon.png')} style={styles.recipeIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setCurrentScreen('savedRecipes')}>
      <Image source={require('./assets/images/SharepageIcon.png')} style={styles.shareIcon} />
    </TouchableOpacity>
  </View>
);

  // ========== MAIN RENDER ==========
  const renderCurrentScreen = () => {
  switch (currentScreen) {
    case 'profile':
      return renderProfileScreen();
    case 'savedPhotos':
      return renderSavedPhotosScreen();
    case 'savedRecipes':
      return renderSavedRecipesScreen();
    case 'recipeDetail':
      return renderRecipeDetailScreen();
    case 'reviews':
      return renderReviewsScreen();
    default:
      return renderRecipeScreen();
  }
};

  return (
    <SafeAreaView style={styles.container}>
      {showSplash ? renderSplash() : renderCurrentScreen()}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

// ========== STYLES ==========
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4f8',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    width: 500,
    height: 500,
  },
  // Screen Headers
  screenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B5A3C',
    fontFamily: 'serif',
  },
  backButton: {
    fontSize: 16,
    color: '#8B5A3C',
    fontWeight: '600',
  },
  addButton: {
    fontSize: 16,
    color: '#8B5A3C',
    fontWeight: '600',
  },
  placeholder: {
    width: 50,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  // Profile Screen Styles
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5A3C',
    marginBottom: 5,
    fontFamily: 'serif',
  },
  profileEmail: {
    fontSize: 16,
    color: '#A66B7A',
  },
  menuSection: {
    marginTop: 20,
    marginBottom: 100,
  },
  menuItem: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(139, 90, 60, 0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuText: {
    fontSize: 16,
    color: '#8B5A3C',
    fontWeight: '500',
  },
  // Saved Photos Screen Styles
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  photoCard: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 15,
  },
  photoPlaceholder: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(139, 90, 60, 0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  photoText: {
    fontSize: 30,
    marginBottom: 8,
  },
  photoSubText: {
    fontSize: 14,
    color: '#A66B7A',
  },
  // Forum Screen Styles
  postCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(139, 90, 60, 0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postUserInfo: {
    flex: 1,
  },
  postUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5A3C',
  },
  postTime: {
    fontSize: 12,
    color: '#A66B7A',
  },
  postContent: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
    lineHeight: 20,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  postActionButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  postAction: {
    fontSize: 14,
    color: '#A66B7A',
  },
  // Home Screen Styles
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    height: 100,
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginTop: -30,
    marginLeft: -90,
  },
  lataiTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: 3,
    fontFamily: 'serif',
    marginLeft: -30,
  },
  profileIcon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,
    marginRight: -50,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 0,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchIconText: {
    fontSize: 18,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#aaa',
  },
  activeTabText: {
    color: '#8B5A3C',
    fontWeight: 'bold',
  },
  activeUnderline: {
    height: 2,
    width: '60%',
    backgroundColor: '#8B5A3C',
    marginTop: 5,
    borderRadius: 2,
  },
  recipeContent: {
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#8B5A3C',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  recipeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recipeCard: {
  width: '30%',
  aspectRatio: 1,
  marginBottom: 15,
  borderRadius: 12,
  overflow: 'hidden',
  position: 'relative',
  borderWidth: 2,
  borderColor: '#8B5A3C',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 3,
},
  recipeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  recipeFrame: {
    position: 'absolute',
    width: '110%',
    height: '110%',
    top: -5,
    left: -5,
  },
  comingSoon: {
    fontSize: 14,
    color: '#aaa',
    fontStyle: 'italic',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: '#E8B4CB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cameraIcon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 10,
    marginRight: -25,
  },
  recipeIcon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
    marginRight: -40,
  },
  shareIcon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: -40,
    marginLeft: -10,
  },
  recipeInfo: {
  position: 'absolute',
  bottom: 5,
  left: 5,
  right: 5,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: 4,
  borderRadius: 6,
},
recipeTitle: {
  fontSize: 10,
  fontWeight: 'bold',
  color: '#8B5A3C',
  textAlign: 'center',
},
recipeMeta: {
  fontSize: 8,
  color: '#A66B7A',
  textAlign: 'center',
},


// Add these NEW ones to your StyleSheet:
recipeDetailHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingTop: 20,
  paddingBottom: 15,
},
profileIconSmall: {
  width: 40,
  height: 40,
  borderRadius: 20,
},
recipeDetailContent: {
  flex: 1,
  paddingHorizontal: 20,
},
recipeDetailTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#8B5A3C',
  textAlign: 'center',
  marginBottom: 10,
  letterSpacing: 2,
},
recipeImageContainer: {
  alignItems: 'center',
  marginVertical: 20,
},
recipeDetailImage: {
  width: 250,
  height: 250,
  borderRadius: 20,
},
ingredientsSection: {
  marginTop: 30,
  marginBottom: 30,
},
sectionHeader: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#8B5A3C',
  textAlign: 'center',
  marginBottom: 20,
  letterSpacing: 1,
},
ingredientItem: {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: 15,
  marginBottom: 8,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: 'rgba(139, 90, 60, 0.1)',
},
ingredientText: {
  fontSize: 13,
  color: '#666',
  textAlign: 'center',
  lineHeight: 18,
},
makeMeButton: {
  backgroundColor: '#E8B4CB',
  paddingVertical: 18,
  paddingHorizontal: 40,
  borderRadius: 30,
  alignSelf: 'center',
  marginVertical: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
},
makeMeButtonText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#8B5A3C',
  letterSpacing: 2,
},
instructionsSection: {
  marginTop: 20,
  marginBottom: 30,
},
instructionItem: {
  flexDirection: 'row',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: 15,
  marginBottom: 10,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: 'rgba(139, 90, 60, 0.1)',
},
instructionNumber: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#8B5A3C',
  marginRight: 10,
  minWidth: 25,
},
instructionText: {
  fontSize: 14,
  color: '#666',
  flex: 1,
  lineHeight: 20,
},
bottomSpacing: {
  height: 100,
},
// Add these search-related styles:
noResultsContainer: {
  alignItems: 'center',
  paddingVertical: 40,
},
noResultsText: {
  fontSize: 16,
  color: '#A66B7A',
  textAlign: 'center',
  fontStyle: 'italic',
  marginBottom: 15,
},
clearSearchButton: {
  backgroundColor: '#E8B4CB',
  paddingVertical: 8,
  paddingHorizontal: 20,
  borderRadius: 15,
},
clearSearchText: {
  fontSize: 14,
  color: '#8B5A3C',
  fontWeight: '600',
},
// Review Styles
ratingContainer: {
  marginTop: 5,
  alignItems: 'center',
},
starsRow: {
  flexDirection: 'row',
  marginBottom: 2,
},
star: {
  fontSize: 12,
  color: '#FFD700',
  marginHorizontal: 1,
},
starLarge: {
  fontSize: 20,
  color: '#FFD700',
  marginHorizontal: 2,
},
starSmall: {
  fontSize: 14,
  color: '#FFD700',
  marginHorizontal: 1,
},
starInput: {
  fontSize: 24,
  color: '#FFD700',
  marginHorizontal: 3,
},
reviewCount: {
  fontSize: 10,
  color: '#A66B7A',
  textAlign: 'center',
},
reviewsContent: {
  flex: 1,
  paddingHorizontal: 20,
},
reviewsHeader: {
  flexDirection: 'row',
  padding: 15,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: 12,
  marginBottom: 20,
},
reviewRecipeImage: {
  width: 80,
  height: 80,
  borderRadius: 10,
  marginRight: 15,
},
reviewRecipeInfo: {
  flex: 1,
  justifyContent: 'center',
},
reviewRecipeTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#8B5A3C',
  marginBottom: 8,
},
overallRating: {
  alignItems: 'flex-start',
},
ratingText: {
  fontSize: 14,
  color: '#666',
  marginTop: 5,
},
addReviewSection: {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: 20,
  borderRadius: 12,
  marginBottom: 20,
},
inputLabel: {
  fontSize: 14,
  color: '#8B5A3C',
  fontWeight: '600',
  marginBottom: 8,
  marginTop: 15,
},
reviewInput: {
  backgroundColor: 'white',
  padding: 12,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#ddd',
  fontSize: 16,
},
ratingInput: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
},
reviewTextArea: {
  backgroundColor: 'white',
  padding: 12,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#ddd',
  fontSize: 16,
  minHeight: 100,
  textAlignVertical: 'top',
},
submitReviewButton: {
  backgroundColor: '#E8B4CB',
  padding: 15,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 15,
},
submitReviewText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#8B5A3C',
},
reviewsList: {
  marginBottom: 20,
},
reviewCard: {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: 15,
  borderRadius: 12,
  marginBottom: 12,
},
reviewHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 8,
},
reviewUserName: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#8B5A3C',
},
reviewDate: {
  fontSize: 12,
  color: '#A66B7A',
},
reviewRating: {
  flexDirection: 'row',
  marginBottom: 8,
},
reviewComment: {
  fontSize: 14,
  color: '#666',
  lineHeight: 20,
},
// Reviews Summary Styles (for recipe detail page)
reviewsSummarySection: {
  marginTop: 30,
  marginBottom: 30,
},
overallRatingContainer: {
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: 20,
  borderRadius: 12,
  marginBottom: 15,
},
recentReviews: {
  marginBottom: 15,
},
reviewPreview: {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: 15,
  borderRadius: 10,
  marginBottom: 10,
},
reviewPreviewHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 5,
},
reviewPreviewUser: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#8B5A3C',
},
reviewPreviewStars: {
  flexDirection: 'row',
},
reviewPreviewComment: {
  fontSize: 13,
  color: '#666',
  lineHeight: 18,
},
viewAllReviewsButton: {
  backgroundColor: '#E8B4CB',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
},
viewAllReviewsText: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#8B5A3C',
  letterSpacing: 1,
},
// Saved Recipes Styles
savedRecipesGrid: {
  marginBottom: 100,
},
savedRecipeCard: {
  backgroundColor: 'white',
  flexDirection: 'row',
  padding: 15,
  borderRadius: 12,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: 'rgba(139, 90, 60, 0.1)',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 3,
  position: 'relative',
},
savedRecipeImage: {
  width: 80,
  height: 80,
  borderRadius: 10,
  marginRight: 15,
},
savedRecipeInfo: {
  flex: 1,
  justifyContent: 'center',
},
savedRecipeTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#8B5A3C',
  marginBottom: 4,
},
savedRecipeMeta: {
  fontSize: 14,
  color: '#A66B7A',
  marginBottom: 4,
},
savedRecipeCategory: {
  fontSize: 12,
  color: '#90C695',
  fontWeight: '600',
},
unsaveButton: {
  position: 'absolute',
  top: 10,
  right: 10,
  padding: 5,
},
unsaveButtonText: {
  fontSize: 20,
},
noSavedRecipes: {
  alignItems: 'center',
  paddingVertical: 60,
  paddingHorizontal: 30,
},
noSavedRecipesTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#8B5A3C',
  marginBottom: 10,
  textAlign: 'center',
},
noSavedRecipesText: {
  fontSize: 16,
  color: '#A66B7A',
  textAlign: 'center',
  lineHeight: 22,
  marginBottom: 30,
},
exploreButton: {
  backgroundColor: '#E8B4CB',
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 25,
},
exploreButtonText: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#8B5A3C',
  letterSpacing: 1,
},
saveRecipeButton: {
  backgroundColor: '#90C695',
  paddingVertical: 15,
  paddingHorizontal: 40,
  borderRadius: 25,
  alignSelf: 'center',
  marginVertical: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4,
},
saveRecipeButtonSaved: {
  backgroundColor: '#E8B4CB',
},
saveRecipeButtonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#8B5A3C',
  letterSpacing: 1,
  textAlign: 'center',
},
});