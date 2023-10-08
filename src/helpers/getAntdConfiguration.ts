import { ThemeConfig } from "antd";

export const getAntdConfiguration = (): ThemeConfig => {
    return {
        components: {
            Modal: {
                contentBg:''
            },
            Select: {
                colorBgContainer: '#4b5563',
                colorBorder: '#64748b',
                colorText: '#FFFFFF',
                colorTextBase: '#FFFFFF',
                colorTextDescription: '#FFFFFF',
                colorTextPlaceholder: '#FFFFFF',
                optionSelectedBg: '#374151',

            }
        },
        token: {
            colorPrimary: '#00b96b',
            borderRadius: 2,
            colorBgContainer: '#f6ffed',
        },
    }
}