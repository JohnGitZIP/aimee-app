import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from 'expo-status-bar';
import { useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useTheme, Button } from 'react-native-paper';

import Divider from '../../components/Divider';
import MenuList from '../../components/MenuList';
import SafeAreaView from '../../components/SafeAreaView';
import Container from '../../layout/Container';
import ProfileAvatar from '../../views/Profile/ProfileAvatar';

const Profile = ({ navigation }) => {
  const { colors } = useTheme();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setStatusBarBackgroundColor(colors.surface);
      setStatusBarStyle('dark');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container mt={16}>
          <ProfileAvatar
            name="Muhammad Faizal Fazri"
            avatar=" "
            status="Anggota AIMEE"
          />
          <Divider line />
        </Container>

        <Container mb={8}>
          <Text style={styles.sectionHeader}>Account</Text>
        </Container>
        <MenuList text="Account Settings" icon="account-outline" />
        <MenuList
          text="My Startup"
          icon="lightbulb-on-outline"
          info={<Text style={{ color: colors.primary }}>Register now !</Text>}
        />
        <MenuList text="Favorites" icon="bookmark-outline" />
        <MenuList text="My Courses" icon="book-outline" />
        <MenuList text="Badge and Certificate" icon="trophy-variant-outline" />

        <Divider />

        <Container mb={8}>
          <Text style={styles.sectionHeader}>General</Text>
        </Container>
        <MenuList text="Help Center" icon="help-circle-outline" />
        <MenuList text="Terms and Privacy" icon="file-document-outline" />
        <MenuList
          text="Rate AIMEE App"
          icon="star-outline"
          info={<Text style={{ color: colors.disabled }}>v 1.0.0</Text>}
        />

        <Divider />

        <Button
          onPress={() => {}}
          mode="contained"
          style={[
            styles.logoutButton,
            {
              backgroundColor: colors.error,
            },
          ]}
        >
          Logout
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  sectionHeader: { fontSize: 16, fontWeight: 'bold' },
  logoutButton: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
