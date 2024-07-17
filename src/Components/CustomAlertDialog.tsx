/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";
import AppColors from "../Common/Theme/Colors";
import { StationDataState } from "../Data/data_remote/StationData";
type Data = {
  id: any;
  resetOnDelete: () => void;
};

export const CustomAlertDialog = ({ id, resetOnDelete }: Data) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const handleClick = useCallback(() => {
    resetOnDelete();
  }, []);
  const toast = useToast({
    position: "top",
    title: "Container style is updated",
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
  });

  const OnDeleteAction = async () => {
    setLoading(true);
    try {
      await StationDataState.deletteStation(id);
      setLoading(false);
      onClose();
    } catch (error) {
      toast({
        title: "Suppression",
        description: "Erreur lors de la suppression.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(error);
    }
  };
  return (
    <>
      <DeleteIcon
        cursor={"pointer"}
        style={{ fontSize: "20px", color: AppColors.erro }}
        onClick={onOpen}
      />
      {
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Suppression
              </AlertDialogHeader>

              <AlertDialogBody>
                Êtes-vous sûr de vouloir supprimer cette gare ?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Annuler
                </Button>
                {loading == true ? (
                  <Spinner
                    ml={3}
                    size={"lg"}
                    marginLeft={"5%"}
                    marginRight={"5%"}
                  />
                ) : (
                  <Button
                    colorScheme="red"
                    onClick={async () => {
                      OnDeleteAction();
                      onClose();
                      handleClick()
                      toast({
                        title: "Suppression",
                        description: "Suppression réussie avec succès.",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      });
                    }}
                    ml={3}
                  >
                    Supprimer
                  </Button>
                )}
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      }
    </>
  );
};
