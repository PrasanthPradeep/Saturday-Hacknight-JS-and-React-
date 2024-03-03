import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Home2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeLayout]} />
      <View style={styles.homeItem} />
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/frame-1190.png")}
        />
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={styles.groupParent}>
            <View style={styles.groupItemLayout}>
              <View style={[styles.groupItem, styles.groupBorder]} />
              <Text style={[styles.all, styles.allTypo]}>All</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.groupLayout2]}>
              <View style={[styles.groupInner, styles.groupLayout2]} />
              <Text style={[styles.dailyRoutine, styles.allPosition]}>
                Daily Routine
              </Text>
            </View>
            <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
              <View style={[styles.rectangleView, styles.groupViewLayout]} />
              <Text style={[styles.studyRoutine, styles.studyRoutinePosition]}>
                Study Routine
              </Text>
            </View>
            <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
              <View style={[styles.groupView, styles.groupViewLayout]}>
                <View style={[styles.groupChild1, styles.groupViewLayout]} />
                <Text
                  style={[styles.healthHabits, styles.studyRoutinePosition]}
                >
                  Health Habits
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.rectangleParent1, styles.groupChildLayout1]}>
          <View style={[styles.groupChild2, styles.groupChildLayout1]} />
          <Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-10.png")}
          />
          <Text style={[styles.text, styles.textTypo1]}>10</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupChildLayout1]}>
          <View style={[styles.groupChild3, styles.groupChildLayout1]} />
          <Text style={[styles.mon, styles.monPosition]}>Mon</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text1, styles.allTypo]}>11</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent3, styles.groupChildLayout1]}>
          <View style={[styles.groupChild2, styles.groupChildLayout1]} />
          <Text style={[styles.tue, styles.sunTypo]}>Tue</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>12</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent4, styles.groupChildLayout1]}>
          <View style={[styles.groupChild2, styles.groupChildLayout1]} />
          <Text style={[styles.wed, styles.monPosition]}>Wed</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>13</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent5, styles.groupChildLayout1]}>
          <View style={[styles.groupChild2, styles.groupChildLayout1]} />
          <Text style={[styles.sun, styles.sunTypo]}>Thu</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>14</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent6, styles.groupChildLayout1]}>
          <View style={[styles.groupChild2, styles.groupChildLayout1]} />
          <Text style={[styles.fri, styles.sunTypo]}>Fri</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>15</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent7, styles.groupChildLayout1]}>
          <View style={[styles.groupChild2, styles.groupChildLayout1]} />
          <Text style={[styles.sat, styles.sunTypo]}>Sat</Text>
          <View style={[styles.ellipseIcon, styles.ellipseIconLayout]}>
            <Image
              style={[styles.groupChild4, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-10.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>16</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.childGroupLayout]}
        onPress={() => navigation.navigate("NewTask")}
      >
        <Image
          style={[styles.groupChild15, styles.childGroupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.text7, styles.todayTypo]}>+</Text>
      </Pressable>
      <View style={styles.groupParent1}>
        <Pressable
          style={[styles.groupFrame, styles.groupChildLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.groupFrame, styles.groupChildLayout]}>
            <View style={[styles.groupChild16, styles.groupChildLayout]} />
            <Text style={[styles.read, styles.readClr]}>Read</Text>
            <Text style={[styles.text8, styles.textTypo]}>📖</Text>
            <Image
              style={[styles.groupIcon, styles.groupLayout1]}
              contentFit="cover"
              source={require("../assets/group-71.png")}
            />
            <Image
              style={[styles.groupChild17, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/group-72.png")}
            />
          </View>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent9, styles.groupChildLayout]}
          onPress={() => navigation.navigate("Home1")}
        >
          <View style={[styles.groupChild18, styles.groupChildLayout]} />
          <View style={styles.studyParent}>
            <Text style={[styles.study, styles.readTypo]}>Study</Text>
            <Text style={[styles.text9, styles.textTypo]}>✏️</Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/group-71.png")}
          />
        </Pressable>
        <View style={[styles.groupParent2, styles.parentLayout]}>
          <View style={[styles.rectangleParent10, styles.parentLayout]}>
            <View style={[styles.groupChild20, styles.groupChildLayout]} />
            <View style={styles.mopTheHouseParent}>
              <Text style={[styles.mopTheHouse, styles.readTypo]}>
                Mop the house
              </Text>
              <Text style={[styles.text10, styles.textTypo]}>🪣</Text>
              <Text style={[styles.check, styles.textTypo]}>check</Text>
            </View>
          </View>
          <Image
            style={[styles.groupChild21, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/group-71.png")}
          />
        </View>
      </View>
      <View style={[styles.homeInner, styles.homeLayout]} />
      <View style={[styles.groupParent3, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild22, styles.groupLayout]} />
        </View>
        <View style={styles.frameView}>
          <Pressable
            style={styles.childGroupLayout}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Image
              style={[styles.groupChild15, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.calendarMonth, styles.personTypo]}>
              calendar_month
            </Text>
          </Pressable>
          <Pressable
            style={[styles.ellipseParent5, styles.childGroupLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.groupChild15, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.checklist, styles.personTypo]}>checklist</Text>
          </Pressable>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.frameChild, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-9.png")}
            />
            <Text style={[styles.person, styles.personTypo]}>person</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.homeChild1, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/group-72.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  todayTypo: {
    textAlign: "left",
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameLayout: {
    height: 32,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  allTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupLayout2: {
    width: 91,
    height: 32,
  },
  allPosition: {
    fontSize: FontSize.size_xs,
    top: 7,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  groupViewLayout: {
    width: 97,
    height: 32,
  },
  studyRoutinePosition: {
    marginLeft: -41.5,
    fontSize: FontSize.size_xs,
    top: 7,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  groupChildLayout1: {
    width: 48,
    height: 68,
    top: 0,
    position: "absolute",
  },
  sunTypo: {
    top: 4,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 32,
    height: 32,
    position: "absolute",
  },
  textTypo1: {
    marginLeft: -6,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  monPosition: {
    marginLeft: -14,
    top: 4,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  childGroupLayout: {
    height: 56,
    width: 56,
  },
  groupChildLayout: {
    height: 60,
    width: 393,
    left: 0,
    position: "absolute",
  },
  readClr: {
    color: Color.colorGray_300,
    top: 20,
  },
  textTypo: {
    fontFamily: FontFamily.materialIconsRegular,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout1: {
    height: 24,
    width: 24,
    left: 353,
    position: "absolute",
  },
  childLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  readTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    height: 192,
    width: 393,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 88,
    width: 430,
    left: 0,
    position: "absolute",
  },
  personTypo: {
    color: Color.colorGray_700,
    left: 16,
    fontFamily: FontFamily.materialIconsRegular,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  homeChild: {
    top: 105,
    left: 33,
    borderColor: Color.colorWhite,
    width: 29,
  },
  homeItem: {
    backgroundColor: Color.colorPlum_100,
    height: 178,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  today: {
    marginLeft: -26,
    top: 58,
    fontSize: FontSize.size_base,
    left: "50%",
  },
  groupChild: {
    top: 5,
    left: 314,
    width: 6,
    height: 22,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorOrchid,
    width: 68,
    height: 32,
  },
  all: {
    marginLeft: -8,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    top: 7,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  groupItemLayout: {
    width: 68,
    height: 32,
  },
  groupInner: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  dailyRoutine: {
    marginLeft: -39.5,
    color: Color.colorGray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  rectangleView: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  studyRoutine: {
    color: Color.colorGray_500,
  },
  rectangleContainer: {
    marginLeft: 8,
  },
  groupChild1: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  healthHabits: {
    color: Color.colorGray_600,
  },
  groupView: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapper: {
    marginLeft: -160,
    width: 276,
    left: "50%",
    top: 0,
  },
  frameParent: {
    top: 194,
    left: 77,
    width: 320,
  },
  groupChild2: {
    backgroundColor: Color.colorPlum_200,
    borderRadius: Border.br_xs,
    left: 0,
  },
  sun: {
    marginLeft: -12,
  },
  ellipseIcon: {
    top: 28,
    left: 8,
  },
  text: {
    top: 35,
  },
  rectangleParent1: {
    left: 0,
  },
  groupChild3: {
    backgroundColor: Color.colorOrchid,
    borderRadius: Border.br_xs,
    left: 0,
  },
  mon: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupChild4: {
    left: 0,
    top: 0,
  },
  text1: {
    marginLeft: -5,
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    top: 7,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  rectangleParent2: {
    left: 56,
  },
  tue: {
    marginLeft: -11,
  },
  text2: {
    top: 7,
    marginLeft: -6,
  },
  rectangleParent3: {
    left: 112,
  },
  wed: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleParent4: {
    left: 168,
  },
  rectangleParent5: {
    left: 224,
  },
  fri: {
    marginLeft: -7,
  },
  rectangleParent6: {
    left: 280,
  },
  sat: {
    marginLeft: -10,
  },
  rectangleParent7: {
    left: 336,
  },
  groupContainer: {
    top: 90,
    left: 23,
    width: 384,
    height: 68,
    position: "absolute",
  },
  groupChild15: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text7: {
    top: 10,
    left: 19,
    fontSize: FontSize.size_5xl,
  },
  groupPressable: {
    top: 770,
    left: 342,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  groupChild16: {
    backgroundColor: Color.colorKhaki,
    borderRadius: Border.br_xs,
    top: 0,
  },
  read: {
    marginLeft: -149.5,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  text8: {
    left: 15,
    color: Color.colorGray_300,
    top: 20,
    fontSize: FontSize.size_5xl,
  },
  groupIcon: {
    top: 18,
  },
  groupChild17: {
    left: 355,
    top: 20,
  },
  groupFrame: {
    top: 0,
  },
  groupChild18: {
    backgroundColor: Color.colorLightgreen,
    borderRadius: Border.br_xs,
    top: 0,
  },
  study: {
    marginLeft: -4,
    color: Color.lightLabelPrimary,
    top: 0,
  },
  text9: {
    top: 1,
    fontSize: FontSize.size_5xl,
    color: Color.lightLabelPrimary,
    left: 0,
  },
  studyParent: {
    marginLeft: -181.5,
    width: 72,
    height: 21,
    top: 20,
    left: "50%",
    position: "absolute",
  },
  rectangleParent9: {
    top: 76,
  },
  groupChild20: {
    top: 132,
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_xs,
  },
  mopTheHouse: {
    marginLeft: -147.35,
    top: 151,
    width: 115,
    color: Color.lightLabelPrimary,
  },
  text10: {
    top: 152,
    width: 26,
    fontSize: FontSize.size_5xl,
    color: Color.lightLabelPrimary,
    left: 0,
  },
  check: {
    left: 339,
    fontSize: FontSize.size_xl,
    color: Color.lightLabelPrimary,
    top: 0,
  },
  mopTheHouseParent: {
    marginLeft: -180,
    width: 358,
    height: 172,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  rectangleParent10: {
    top: 0,
  },
  groupChild21: {
    top: 150,
  },
  groupParent2: {
    top: 20,
  },
  groupParent1: {
    top: 242,
    left: 21,
    height: 212,
    width: 393,
    position: "absolute",
  },
  homeInner: {
    marginLeft: -186.5,
    top: 272,
    borderColor: Color.colorGray_200,
    width: 374,
    left: "50%",
  },
  groupChild22: {
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  rectangleWrapper: {
    top: 0,
  },
  calendarMonth: {
    top: 18,
  },
  checklist: {
    top: 16,
  },
  ellipseParent5: {
    marginLeft: 56,
  },
  frameChild: {
    zIndex: 0,
  },
  person: {
    zIndex: 1,
    top: 16,
  },
  framePressable: {
    marginLeft: 56,
    flexDirection: "row",
  },
  frameView: {
    marginLeft: -140,
    top: 16,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  groupParent3: {
    top: 842,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  homeChild1: {
    top: 338,
    left: 376,
  },
  home: {
    borderRadius: Border.br_36xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default Home2;
