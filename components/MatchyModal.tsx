'use client';

import { useState } from 'react';
import { Modal, Button, Typography, Form, Input, InputNumber, Select, Upload, message } from 'antd';
import { HeartFilled, UploadOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import type { UploadFile } from 'antd';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// Type Definitions
interface Profile {
  id: string;
  name: string;
  age: number;
  gender: 'M' | 'F';
  zodiac: string;
  photo: string;
  description: string;
}

interface UserFormData {
  photo: string;
  gender: 'M' | 'F';
  age: number;
  zodiac: string;
}

// Zodiac Compatibility Map
const zodiacCompatibility: Record<string, string[]> = {
  Aries: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
  Taurus: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
  Gemini: ['Libra', 'Aquarius', 'Aries', 'Leo'],
  Cancer: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
  Leo: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
  Virgo: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
  Libra: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
  Scorpio: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
  Sagittarius: ['Aries', 'Leo', 'Libra', 'Aquarius'],
  Capricorn: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
  Aquarius: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
  Pisces: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
};

// Zodiac signs list
const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

// Mock Data - Profile Pool (both genders)
const profilePool: Profile[] = [
  // Male profiles
  {
    id: 'p1',
    name: 'Arjun',
    age: 28,
    gender: 'M',
    zodiac: 'Gemini',
    photo: 'https://i.pravatar.cc/300?img=12',
    description: 'Tech entrepreneur with a passion for travel',
  },
  {
    id: 'p2',
    name: 'Rohan',
    age: 27,
    gender: 'M',
    zodiac: 'Leo',
    photo: 'https://i.pravatar.cc/300?img=13',
    description: 'Fitness enthusiast and amateur chef',
  },
  {
    id: 'p3',
    name: 'Vikram',
    age: 29,
    gender: 'M',
    zodiac: 'Aquarius',
    photo: 'https://i.pravatar.cc/300?img=14',
    description: 'Artist and music lover, plays guitar',
  },
  {
    id: 'p4',
    name: 'Aditya',
    age: 25,
    gender: 'M',
    zodiac: 'Sagittarius',
    photo: 'https://i.pravatar.cc/300?img=15',
    description: 'Adventure seeker, loves hiking and photography',
  },
  {
    id: 'p5',
    name: 'Kabir',
    age: 30,
    gender: 'M',
    zodiac: 'Taurus',
    photo: 'https://i.pravatar.cc/300?img=17',
    description: 'Finance professional who loves good wine',
  },
  {
    id: 'p6',
    name: 'Nikhil',
    age: 26,
    gender: 'M',
    zodiac: 'Scorpio',
    photo: 'https://i.pravatar.cc/300?img=33',
    description: 'Writer and coffee connoisseur',
  },
  {
    id: 'p7',
    name: 'Rahul',
    age: 28,
    gender: 'M',
    zodiac: 'Pisces',
    photo: 'https://i.pravatar.cc/300?img=51',
    description: 'Software developer, gamer, and foodie',
  },
  {
    id: 'p8',
    name: 'Siddharth',
    age: 27,
    gender: 'M',
    zodiac: 'Capricorn',
    photo: 'https://i.pravatar.cc/300?img=52',
    description: 'Architect with a love for minimalist design',
  },
  // Female profiles
  {
    id: 'p9',
    name: 'Priya',
    age: 26,
    gender: 'F',
    zodiac: 'Libra',
    photo: 'https://i.pravatar.cc/300?img=47',
    description: 'Creative designer who loves art and brunches',
  },
  {
    id: 'p10',
    name: 'Ananya',
    age: 25,
    gender: 'F',
    zodiac: 'Aries',
    photo: 'https://i.pravatar.cc/300?img=45',
    description: 'Marketing professional and yoga enthusiast',
  },
  {
    id: 'p11',
    name: 'Riya',
    age: 27,
    gender: 'F',
    zodiac: 'Cancer',
    photo: 'https://i.pravatar.cc/300?img=44',
    description: 'Book lover and aspiring novelist',
  },
  {
    id: 'p12',
    name: 'Sanya',
    age: 29,
    gender: 'F',
    zodiac: 'Virgo',
    photo: 'https://i.pravatar.cc/300?img=43',
    description: 'Data scientist who loves hiking',
  },
  {
    id: 'p13',
    name: 'Ishita',
    age: 24,
    gender: 'F',
    zodiac: 'Gemini',
    photo: 'https://i.pravatar.cc/300?img=41',
    description: 'Dancer and travel blogger',
  },
  {
    id: 'p14',
    name: 'Meera',
    age: 28,
    gender: 'F',
    zodiac: 'Scorpio',
    photo: 'https://i.pravatar.cc/300?img=40',
    description: 'Chef with a passion for fusion cuisine',
  },
  {
    id: 'p15',
    name: 'Kavya',
    age: 26,
    gender: 'F',
    zodiac: 'Sagittarius',
    photo: 'https://i.pravatar.cc/300?img=38',
    description: 'Photographer and adventure junkie',
  },
  {
    id: 'p16',
    name: 'Naina',
    age: 27,
    gender: 'F',
    zodiac: 'Aquarius',
    photo: 'https://i.pravatar.cc/300?img=35',
    description: 'Environmental activist and musician',
  },
];

export default function MatchyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [userData, setUserData] = useState<UserFormData | null>(null);
  const [rejectedIndexes, setRejectedIndexes] = useState<Set<number>>(new Set());
  const [showSuccessState, setShowSuccessState] = useState(false);
  const [currentMatch, setCurrentMatch] = useState<Profile | null>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = Form.useForm();

  // Get compatibility score
  const getCompatibilityScore = (profile: Profile, currentUserData?: UserFormData): number => {
    const user = currentUserData || userData;
    if (!user) return 0;

    let score = 0;

    // Zodiac compatibility (primary weight)
    const compatibleSigns = zodiacCompatibility[user.zodiac] || [];
    if (compatibleSigns.includes(profile.zodiac)) {
      score += 10;
    }

    // Age matching (prefer ±4 years)
    const ageDiff = Math.abs(user.age - profile.age);
    if (ageDiff <= 2) {
      score += 8;
    } else if (ageDiff <= 4) {
      score += 5;
    }

    return score;
  };

  // Get opposite gender profiles
  const getOppositeGenderProfiles = (currentUserData?: UserFormData): Profile[] => {
    const user = currentUserData || userData;
    if (!user) return [];
    const oppositeGender = user.gender === 'M' ? 'F' : 'M';
    return profilePool.filter((p) => p.gender === oppositeGender);
  };

  // Get next best match
  const getNextMatch = (updatedRejected?: Set<number>, currentUserData?: UserFormData): Profile | null => {
    const rejectedSet = updatedRejected || rejectedIndexes;
    const oppositeGenderProfiles = getOppositeGenderProfiles(currentUserData);

    // Filter out rejected profiles
    const availableProfiles = oppositeGenderProfiles.filter(
      (profile) => {
        const index = profilePool.findIndex((p) => p.id === profile.id);
        return !rejectedSet.has(index);
      }
    );

    if (availableProfiles.length === 0) {
      return null;
    }

    // Score and sort by compatibility
    const scoredProfiles = availableProfiles.map((profile) => ({
      profile,
      score: getCompatibilityScore(profile, currentUserData),
    }));

    scoredProfiles.sort((a, b) => b.score - a.score);

    return scoredProfiles[0].profile;
  };

  // Generate intro text based on compatibility
  const generateIntro = (profile: Profile): string => {
    if (!userData) return '';

    const compatibleSigns = zodiacCompatibility[userData.zodiac] || [];
    const isHighCompatibility = compatibleSigns.includes(profile.zodiac);
    const ageDiff = Math.abs(userData.age - profile.age);

    const intros = {
      high: [
        'This match has serious potential—you both bring the energy.',
        'The vibe is strong with this one.',
        'Something special could be happening here.',
      ],
      medium: [
        'Could be something here—worth finding out.',
        'This one caught our eye for you.',
        'Interesting match—see where it goes.',
      ],
    };

    const level = isHighCompatibility && ageDiff <= 3 ? 'high' : 'medium';
    const options = intros[level];
    return options[Math.floor(Math.random() * options.length)];
  };

  // Handle modal open
  const handleOpen = () => {
    setIsOpen(true);
    setShowForm(true);
    setShowSuccessState(false);
    setCurrentMatch(null);
    setRejectedIndexes(new Set());
    form.resetFields();
    setFileList([]);
  };

  // Handle form submission
  const handleFormSubmit = (values: any) => {
    if (fileList.length === 0) {
      message.error('Please upload your photo');
      return;
    }

    const photoUrl = fileList[0].thumbUrl || fileList[0].url || 'https://i.pravatar.cc/300?img=1';

    const formData: UserFormData = {
      photo: photoUrl,
      gender: values.gender,
      age: values.age,
      zodiac: values.zodiac,
    };

    setUserData(formData);
    setShowForm(false);

    // Get first match - pass formData directly to avoid state timing issues
    const match = getNextMatch(undefined, formData);
    setCurrentMatch(match);
  };

  // Handle file upload
  const handleUploadChange = ({ fileList: newFileList }: { fileList: UploadFile[] }) => {
    setFileList(newFileList);
  };

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
      return false;
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('Image must be smaller than 5MB!');
      return false;
    }
    return false; // Prevent auto upload, we'll handle preview locally
  };

  // Handle search again
  const handleSearchAgain = () => {
    const currentIndex = profilePool.findIndex((p) => p.id === currentMatch?.id);
    if (currentIndex !== -1) {
      const updatedRejected = new Set(rejectedIndexes).add(currentIndex);
      setRejectedIndexes(updatedRejected);

      const nextMatch = getNextMatch(updatedRejected);
      setCurrentMatch(nextMatch);
    }
  };

  // Handle connect
  const handleConnect = () => {
    setShowSuccessState(true);
    setTimeout(() => {
      setIsOpen(false);
      setShowSuccessState(false);
    }, 1500);
  };

  // Handle modal close
  const handleClose = () => {
    setIsOpen(false);
    setShowSuccessState(false);
    setShowForm(true);
    setUserData(null);
    setCurrentMatch(null);
    setRejectedIndexes(new Set());
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        onClick={handleOpen}
        type="primary"
        size="large"
        icon={<HeartFilled />}
        style={{
          background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
          border: 'none',
          boxShadow: '0 4px 15px rgba(255, 20, 147, 0.4)',
          fontSize: '16px',
          height: 'auto',
          padding: '12px 32px',
          fontWeight: 600,
        }}
        className="romantic-glow"
      >
        Meet Your Match ✨
      </Button>

      {/* Modal */}
      <Modal
        open={isOpen}
        onCancel={handleClose}
        footer={null}
        centered
        width={600}
        className="matchy-modal"
        style={{ maxWidth: '95vw' }}
      >
        <AnimatePresence mode="wait">
          {showForm ? (
            // User Profile Form
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-6"
            >
              <Title
                level={2}
                className="text-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, #FF1493, #FF69B4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Tell us about you
              </Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleFormSubmit}
                className="px-4"
              >
                <Form.Item
                  label="Your Photo"
                  required
                  className="mb-4"
                >
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onChange={handleUploadChange}
                    beforeUpload={beforeUpload}
                    maxCount={1}
                  >
                    {fileList.length === 0 && (
                      <div>
                        <UploadOutlined style={{ fontSize: 24, color: '#FF1493' }} />
                        <div style={{ marginTop: 8, color: '#FF1493' }}>Upload</div>
                      </div>
                    )}
                  </Upload>
                </Form.Item>

                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[{ required: true, message: 'Please select your gender' }]}
                  className="mb-4"
                >
                  <Select
                    placeholder="Select your gender"
                    size="large"
                    style={{ borderColor: '#FF69B4' }}
                  >
                    <Option value="M">Male</Option>
                    <Option value="F">Female</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Age"
                  name="age"
                  rules={[
                    { required: true, message: 'Please enter your age' },
                    { type: 'number', min: 18, max: 100, message: 'Age must be between 18 and 100' }
                  ]}
                  className="mb-4"
                >
                  <InputNumber
                    placeholder="Enter your age"
                    size="large"
                    min={18}
                    max={100}
                    style={{ width: '100%', borderColor: '#FF69B4' }}
                  />
                </Form.Item>

                <Form.Item
                  label="Zodiac Sign"
                  name="zodiac"
                  rules={[{ required: true, message: 'Please select your zodiac sign' }]}
                  className="mb-6"
                >
                  <Select
                    placeholder="Select your zodiac sign"
                    size="large"
                    style={{ borderColor: '#FF69B4' }}
                  >
                    {zodiacSigns.map((sign) => (
                      <Option key={sign} value={sign}>
                        {sign}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item className="mb-0">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    style={{
                      background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(255, 20, 147, 0.4)',
                      fontSize: '16px',
                      height: 'auto',
                      padding: '12px',
                      fontWeight: 600,
                    }}
                  >
                    Find My Match ✨
                  </Button>
                </Form.Item>
              </Form>
            </motion.div>
          ) : showSuccessState ? (
            // Success State
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12"
            >
              <Title
                level={2}
                style={{
                  background: 'linear-gradient(135deg, #FF1493, #FF69B4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: 0,
                }}
              >
                Exciting! We'll connect you soon ✨
              </Title>
            </motion.div>
          ) : currentMatch ? (
            // Match Display
            <motion.div
              key={currentMatch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-6"
            >
              {/* Profile Photo */}
              <div className="flex justify-center mb-6">
                <img
                  src={currentMatch.photo}
                  alt={currentMatch.name}
                  className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover romantic-glow"
                  style={{
                    border: '4px solid rgba(255, 255, 255, 0.8)',
                  }}
                />
              </div>

              {/* Name */}
              <Title
                level={2}
                className="text-center mb-2"
                style={{
                  background: 'linear-gradient(135deg, #FF1493, #FF69B4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {currentMatch.name}
              </Title>

              {/* Age & Zodiac */}
              <div className="text-center mb-4">
                <Text
                  style={{
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontSize: '16px',
                  }}
                >
                  {currentMatch.age} • {currentMatch.zodiac}
                </Text>
              </div>

              {/* Intro Text */}
              <Paragraph
                className="text-center mb-6 px-4"
                style={{
                  fontSize: '18px',
                  color: 'rgba(0, 0, 0, 0.8)',
                  fontWeight: 500,
                }}
              >
                {generateIntro(currentMatch)}
              </Paragraph>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button
                  onClick={handleConnect}
                  type="primary"
                  size="large"
                  style={{
                    background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(255, 20, 147, 0.4)',
                    fontSize: '16px',
                    height: 'auto',
                    padding: '12px 28px',
                    fontWeight: 600,
                    flex: 1,
                  }}
                >
                  Let's Connect ✨
                </Button>
                <Button
                  onClick={handleSearchAgain}
                  size="large"
                  style={{
                    borderColor: '#FF69B4',
                    color: '#FF1493',
                    fontSize: '16px',
                    height: 'auto',
                    padding: '12px 28px',
                    fontWeight: 600,
                    flex: 1,
                  }}
                >
                  Search Again 💫
                </Button>
              </div>
            </motion.div>
          ) : (
            // End State - No More Matches
            <motion.div
              key="end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12"
            >
              <Title
                level={2}
                style={{
                  background: 'linear-gradient(135deg, #FF1493, #FF69B4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: 16,
                }}
              >
                That's all for now!
              </Title>
              <Paragraph
                style={{
                  fontSize: '16px',
                  color: 'rgba(0, 0, 0, 0.6)',
                  marginBottom: 24,
                }}
              >
                Check back soon for fresh faces ✨
              </Paragraph>
              <Button
                onClick={handleClose}
                type="primary"
                size="large"
                style={{
                  background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(255, 20, 147, 0.4)',
                  fontSize: '16px',
                  height: 'auto',
                  padding: '12px 32px',
                  fontWeight: 600,
                }}
              >
                Close
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}
