import {
  Stack,
  LinearProgress,
  Typography,
  EditFab,
  Delete,
} from "@barrels/view";
import Box from "@mui/material/Box";
import useGod from "@hooks/gods/useGod";
import GodRelations from "@/components/Gods/Relations";

function God() {
  const {
    loading,
    data,
    isDeleting,
    deleteGod,
    refetch,
  } = useGod();

  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {data && (
        <>
          <Stack
            rowGap={{
              xs: 1,
              sm: 1.5,
            }}
            paddingX={{
              xs: 2,
              sm: 3,
              md: 4,
            }}
            paddingY={1}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight={700}>
              {data.god.name}
            </Typography>

            <Stack rowGap={{
              xs: 0.5,
            }}>
              <Typography
                variant="h5"
                component="h3">
                God of:-
              </Typography>
              <Box
                component="ul"
                sx={{
                  paddingLeft: {
                    xs: 3,
                    sm: 4,
                  },
                }}>
                {data.god.domains.map((domain, index) => (
                  <Typography
                    key={index}
                    component="li"
                    fontWeight={600}>
                    {domain}
                  </Typography>
                ))}
              </Box>
            </Stack>

            <GodRelations
              relations={data.god.relations}
              onDelete={refetch} />
          </Stack>

          <Delete
            loading={isDeleting}
            onClick={deleteGod} />
          <EditFab link={`/gods/${data.god.id}/edit`} />
        </>
      )}
    </>
  )
}

export default God;
