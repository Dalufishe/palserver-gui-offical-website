import { Box, Flex, RadioCards, Text } from "@radix-ui/themes";
import _ from "lodash";
import React from "react";

export default function Feature() {
  const features = {
    OutOfTheBox: {
      id: "OutOfTheBox",
      title: "開箱即用",
      desc: "安裝 palserver GUI 後，您只需要新增伺服器並點擊「啟動」即完成專用伺服器架設。",
    },
    AllGUI: {
      id: "AllGUI",
      title: "全圖形化介面",
      desc: "擺脫複雜的小黑窗，全圖形化介面讓操作管理更方便，更容易上手。",
    },
    WorldSettings: {
      id: "WorldSettings",
      title: "世界設定調整",
      desc: "palserver GUI 支援所有帕魯專用伺服器設置選項，並提供全圖形化介面方便修改。",
    },
    AutoBackup: {
      id: "AutoBackup",
      title: "自動備份系統",
      desc: "自動備份系統，開啟以防止存檔遺失。",
    },
    PlayerList: {
      id: "PlayerList",
      title: "在線玩家列表",
      desc: "即時顯示在線玩家，並提供踢出、封鎖、封鎖 IP 地址等操作。",
    },
    OnlineMap: {
      id: "OnlineMap",
      title: "即時線上地圖",
      desc: "即時顯示在線玩家遊戲位置。",
    },
    PalguardSupport: {
      id: "PalguardSupport",
      title: "內建防作弊",
      desc: "整合了 Palguard 的強大防作弊功能，保障遊戲的公平與秩序。",
    },
    UE4SSSupport: {
      id: "UE4SSSupport",
      title: "模組管理",
      desc: "內建 UE4SS，圖形化介面管理 Lua 及 Pak 模組讓您自由擴展遊戲功能。",
    },
  };

  return (
    <div className="w-[1120px] mt-16 mb-16 flex flex-wrap gap-8">
      {_.map(features, (feature, key) => (
        <RadioCards.Root defaultValue="1">
          <RadioCards.Item value="4">
            <Flex direction="column" width="100%">
              <Text weight="bold" size="7">
                {feature.title}
              </Text>
              <div className="w-80">
                <Text>{feature.desc}</Text>
              </div>
            </Flex>
          </RadioCards.Item>
        </RadioCards.Root>
      ))}
    </div>
  );
}
