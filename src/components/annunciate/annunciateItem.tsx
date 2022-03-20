import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '@/publish/styles/components/annunciate';
import DEFAULT from '@/config/default';

const { DEFAULT_FONTSIZE } = DEFAULT;

type AnnunciateItemType = {
  url: string;
  title: string;
  turnover_time: string;
  author: string;
  quantity: number;
};

interface AnnunciateItemProps {
  annunciateData: Array<AnnunciateItemType>;
  onPress: (arg: any) => void;
}

const AnnunciateItem: React.FC<AnnunciateItemProps> = props => {
  const { annunciateData, onPress } = props;
  return (
    <>
      {annunciateData.map((a, idx) => (
        <TouchableOpacity
          key={idx}
          activeOpacity={1}
          onPress={() => onPress(a)}
          style={styles.annunciateItemWrap}>
          <Image style={styles.Img} source={{ uri: a.url }} />
          <View style={styles.anunTitleWrap}>
            <Text style={[styles.title, { fontSize: DEFAULT_FONTSIZE }]}>{a.title}</Text>
            <View style={styles.itemDesc}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.author}>
                作者:{a.author}
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.quantity}>
                {a.quantity}阅读
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.turnover_time}>
                {a.turnover_time}分钟前
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default React.memo(AnnunciateItem);
