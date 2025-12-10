import {
  Link,
  Stack,
  LinearProgress,
  Typography,
  EditFab,
} from "@barrels/view";
import useQuest from "@hooks/quests/useQuest";

function Quest() {
  const {
    loading,
    data,
    questStatus,
  } = useQuest();

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
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap">
              <Typography
                variant="h4"
                component="h1"
                fontWeight={700}>
                {data.quest.title}
              </Typography>
              {questStatus && (
                <Stack
                  direction="row"
                  alignItems="center"
                  columnGap={1}
                  sx={{
                    color: questStatus.color,
                  }}>
                  <Typography
                    variant="subtitle1"
                    component="strong"
                    fontWeight={600}>
                    {questStatus.text}
                  </Typography>
                  <questStatus.Icon />
                </Stack>
              )}
            </Stack>

            <Typography
              component="span"
              sx={{
                fontSize: {
                  xs: 18,
                  sm: 24,
                }
              }}>
              Hero:&nbsp;
              <Typography
                component={Link}
                to={`/heroes/${data.quest.hero.id}`}
                sx={{
                  textDecoration: "none",
                  fontWeight: 600,
                  color: "inherit",
                  fontSize: "inherit",
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}>
                {data.quest.hero.name}
              </Typography>
            </Typography>
          </Stack>

          <EditFab link={`/quests/${data.quest.id}/edit`} />
        </>
      )}
    </>
  )
}

export default Quest;
