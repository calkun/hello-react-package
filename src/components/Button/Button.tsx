import { colors } from "../../variables/colors";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
} from "@mui/material";

type ButtonProps = Omit<MuiButtonProps, "color" | "variant" | "size"> & {
  color?: "primary" | "approve" | "danger" | "neutral";
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  variant = "contained",
  size = "medium",
  ...props
}) => {
  const convertToMuiColor = (): SxProps<Theme> => {
    if (props.disabled) {
      return {
        "&:disabled": {
          bgcolor: colors.primitives.neu300,
          border: colors.primitives.neu300,
          color: colors.primitives.neu0,
        },
      };
    }

    switch (color) {
      case "primary":
        if (variant === "contained") {
          return {
            bgcolor: colors.primitives.prim300,
            color: colors.primitives.neu0,
            "&:hover": {
              bgcolor: colors.primitives.prim200,
            },
          };
        }
        if (variant === "outlined") {
          return {
            bgcolor: colors.primitives.neu0,
            borderColor: colors.primitives.prim300,
            color: colors.primitives.prim300,
            border: 1,
            "&:hover": {
              bgcolor: colors.primitives.neu200,
            },
          };
        }
        return {};

      case "approve":
        if (variant === "contained") {
          return {
            bgcolor: colors.primitives.gre300,
            color: colors.primitives.neu0,
            "&:hover": {
              bgcolor: colors.primitives.gre200,
            },
          };
        }
        if (variant === "outlined") {
          return {
            bgcolor: colors.primitives.neu0,
            borderColor: colors.primitives.gre300,
            color: colors.primitives.gre300,
            border: 1,
            "&:hover": {
              bgcolor: colors.primitives.gre100,
            },
          };
        }
        return {};

      case "danger":
        if (variant === "contained") {
          return {
            bgcolor: colors.primitives.red300,
            color: colors.primitives.neu0,
            "&:hover": {
              bgcolor: colors.primitives.red200,
            },
          };
        }
        if (variant === "outlined") {
          return {
            bgcolor: colors.primitives.neu0,
            borderColor: colors.primitives.red300,
            color: colors.primitives.red300,
            border: 1,
            "&:hover": {
              bgcolor: colors.primitives.red100,
            },
          };
        }
        return {};

      case "neutral":
        if (variant === "contained") {
          return {
            bgcolor: colors.primitives.neu0,
            color: colors.primitives.neu500,
            "&:hover": {
              bgcolor: colors.primitives.neu100,
            },
          };
        }
        if (variant === "outlined") {
          return {
            bgcolor: colors.primitives.neu0,
            color: colors.primitives.neu500,
            borderColor: colors.primitives.neu300 + "!important",
            border: 1,
            "&:hover": {
              bgcolor: colors.primitives.neu200,
              borderColor: colors.primitives.neu400 + "!important",
            },
          };
        }
        return {};
    }
  };

  const setPaddingX = (): string => {
    switch (size) {
      case "small":
        return "8px";
      case "medium":
        return "8px";
      case "large":
        return "12px";
    }
  };

  const setPaddingY = (): string => {
    switch (size) {
      case "small":
        return "2px";
      case "medium":
        return "6px";
      case "large":
        return "10px";
    }
  };

  return (
    <MuiButton
      sx={{
        textTransform: "none",
        fontSize: "14px",
        paddingX: setPaddingX() + "!important",
        paddingY: setPaddingY() + "!important",
        ...convertToMuiColor(),
      }}
      disableRipple={true}
      disableElevation={true}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
